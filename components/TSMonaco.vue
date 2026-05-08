<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as monaco from "monaco-editor";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

const props = defineProps<{
  code: string;
  height?: string;
  readonly?: boolean;
}>();

const container = ref<HTMLDivElement>();

self.MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }

    return new editorWorker();
  },
};

onMounted(() => {
  if (!container.value) return;

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });

  const model = monaco.editor.createModel(
    props.code,
    "typescript",
    monaco.Uri.parse("file:///main.ts"),
  );

  monaco.editor.create(container.value, {
    model,
    theme: "vs-dark",
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    fontSize: 18,
    readOnly: props.readonly ?? true,
  });
});
</script>

<template>
  <div
    ref="container"
    :style="{
      height: props.height || '400px',
      border: '1px solid #333',
    }"
  />
</template>
