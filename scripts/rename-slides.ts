#!/usr/bin/env tsx

import fs from "node:fs";
import path from "node:path";

type RenameOperation = {
  oldFilename: string;
  newFilename: string;
  oldPath: string;
  newPath: string;
};

const args = process.argv.slice(2);

const targetDir = args.find((arg) => !arg.startsWith("--"));

const incrementArg = args.find((arg) => arg.startsWith("--increment="));

const decrementArg = args.find((arg) => arg.startsWith("--decrement="));

if (!targetDir) {
  console.error("Usage: npm run rename -- ./slides/modulo-1 --increment=1");

  process.exit(1);
}

if (incrementArg && decrementArg) {
  console.error("Use either --increment or --decrement.");

  process.exit(1);
}

let delta = 0;

if (incrementArg) {
  delta = Number(incrementArg.replace("--increment=", ""));
}

if (decrementArg) {
  delta = -Number(decrementArg.replace("--decrement=", ""));
}

if (!Number.isInteger(delta)) {
  console.error("Increment/decrement must be integers.");

  process.exit(1);
}

if (delta === 0) {
  console.error("Delta cannot be zero.");

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

const renames: RenameOperation[] = [];

for (const file of files) {
  const match = file.match(/^(\d+)(-.*\.md)$/);

  if (!match) continue;

  const [, number, rest] = match;

  const current = Number(number);

  const next = current + delta;

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
  });
}

/**
 * Avoid collisions
 */
renames.sort((a, b) => {
  if (delta > 0) {
    return b.oldFilename.localeCompare(a.oldFilename);
  }

  return a.oldFilename.localeCompare(b.oldFilename);
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
