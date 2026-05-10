#!/usr/bin/env tsx

import fs from "node:fs";
import path from "node:path";
import { Command } from "commander";

type RenameOperation = {
  oldFilename: string;
  newFilename: string;
  oldPath: string;
  newPath: string;
  currentNumber: number;
};

const program = new Command();

program
  .argument("<targetDir>")
  .option("--increment <number>")
  .option("--decrement <number>")
  .option("--start <number>")
  .option("--end <number>")
  .parse();

const options = program.opts<{
  increment?: string;
  decrement?: string;
  start?: string;
  end?: string;
}>();

const [targetDir] = program.args;

if (!targetDir) {
  console.error(
    "Usage: npm run rename -- ./slides/modulo-1 --increment 1 --start 5 --end 10",
  );

  process.exit(1);
}

if (options.increment && options.decrement) {
  console.error("Use either --increment or --decrement.");

  process.exit(1);
}

const increment = options.increment ? Number(options.increment) : undefined;

const decrement = options.decrement ? Number(options.decrement) : undefined;

if (increment !== undefined && !Number.isInteger(increment)) {
  console.error("--increment must be an integer");

  process.exit(1);
}

if (decrement !== undefined && !Number.isInteger(decrement)) {
  console.error("--decrement must be an integer");

  process.exit(1);
}

let delta = 0;

if (increment !== undefined) {
  delta = increment;
}

if (decrement !== undefined) {
  delta = -decrement;
}

if (delta === 0) {
  console.error("You must provide either --increment or --decrement");

  process.exit(1);
}

const absoluteDir = path.resolve(targetDir);

if (!fs.existsSync(absoluteDir)) {
  console.error(`Directory not found: ${absoluteDir}`);

  process.exit(1);
}

const files = fs
  .readdirSync(absoluteDir)
  .filter((file) => /^\d+-.*\.md$/.test(file));

if (files.length === 0) {
  console.error("No slide files found.");

  process.exit(1);
}

/**
 * Extract slide numbers
 */
const slideNumbers = files
  .map((file) => {
    const match = file.match(/^(\d+)/);

    return match ? Number(match[1]) : 0;
  })
  .filter(Boolean);

const minSlide = Math.min(...slideNumbers);
const maxSlide = Math.max(...slideNumbers);

/**
 * Optional range
 */
const start = options.start ? Number(options.start) : minSlide;

const end = options.end ? Number(options.end) : maxSlide;

if (!Number.isInteger(start)) {
  console.error("--start must be an integer");

  process.exit(1);
}

if (!Number.isInteger(end)) {
  console.error("--end must be an integer");

  process.exit(1);
}

if (start > end) {
  console.error("--start cannot be greater than --end");

  process.exit(1);
}

const renames: RenameOperation[] = [];

for (const file of files) {
  const match = file.match(/^(\d+)(-.*\.md)$/);

  if (!match) {
    continue;
  }

  const [, number, rest] = match;

  const currentNumber = Number(number);

  /**
   * Apply only inside range
   */
  if (currentNumber < start || currentNumber > end) {
    continue;
  }

  const next = currentNumber + delta;

  if (next <= 0) {
    console.warn(`Skipping ${file}: resulting number would be <= 0`);

    continue;
  }

  const padded = String(next).padStart(number.length, "0");

  const newFilename = `${padded}${rest}`;

  renames.push({
    oldFilename: file,
    newFilename,
    oldPath: path.join(absoluteDir, file),
    newPath: path.join(absoluteDir, newFilename),
    currentNumber,
  });
}

/**
 * Avoid collisions
 */
renames.sort((a, b) => {
  if (delta > 0) {
    return b.currentNumber - a.currentNumber;
  }

  return a.currentNumber - b.currentNumber;
});

/**
 * Rename slide files
 */
for (const rename of renames) {
  fs.renameSync(rename.oldPath, rename.newPath);

  console.log(`${rename.oldFilename} -> ${rename.newFilename}`);
}

/**
 * Update index.md references
 */
const indexPath = path.join(absoluteDir, "index.md");

if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, "utf-8");

  for (const rename of renames) {
    indexContent = indexContent.replaceAll(
      rename.oldFilename,
      rename.newFilename,
    );
  }

  fs.writeFileSync(indexPath, indexContent);

  console.log("Updated index.md");
}

console.log("Done.");
