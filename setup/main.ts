import { defineAppSetup } from "@slidev/types";
import Editor from "monaco-editor-vue3";

import "monaco-editor/min/vs/editor/editor.main.css";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }

    return new editorWorker();
  },
};

export default defineAppSetup(({ app }) => {
  app.component("MonacoEditor", Editor);
});
