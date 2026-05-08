<script setup lang="ts">
import { ref } from "vue";
import { useTSRunner } from "../composables/useTSRunner";

const editorRef = ref();

function handleMount(editor: any) {
  const uri = monaco.Uri.parse("file:///main.ts");

  const existing = monaco.editor.getModel(uri);

  if (existing) {
    existing.dispose();
  }

  const model = monaco.editor.createModel(code.value, "typescript", uri);

  editor.setModel(model);

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });
}
const props = withDefaults(
  defineProps<{
    initialCode: string;
    height?: string;
  }>(),
  {
    height: "300px",
  },
);

const code = ref(props.initialCode);

const { output } = useTSRunner(code);
</script>

<template>
  <div class="grid grid-cols-2 gap-4" :style="{ height: props.height }">
    <div class="border rounded overflow-hidden">
      <MonacoEditor
        :value="code"
        lang="typescript"
        path="file:///main.ts"
        theme="vs-dark"
        @mount="handleMount"
        :options="{
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
          hover: {
            enabled: true,
          },
          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
        }"
      />
    </div>

    <div class="border rounded p-4 bg-black text-green-400 font-mono">
      <div class="mb-2 text-white">Output</div>

      <pre>{{ output }}</pre>
    </div>
  </div>
</template>
