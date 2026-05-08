import { computed, type Ref } from "vue";
import ts from "typescript";

export function useTSRunner(code: Ref<string>) {
  const output = computed(() => {
    try {
      const js = ts.transpileModule(code.value, {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ES2020,
        },
      }).outputText;

      const logs: string[] = [];

      const fakeConsole = {
        log: (...args: any[]) => {
          logs.push(args.join(" "));
        },
      };

      new Function("console", js)(fakeConsole);

      return logs.join("\n");
    } catch (err: any) {
      return err.message;
    }
  });

  return {
    output,
  };
}
