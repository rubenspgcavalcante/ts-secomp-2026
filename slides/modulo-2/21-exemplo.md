# Exemplo

```ts twoslash
type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;

function sum(a: number, b: number) {
  return a + b;
}

type Result = GetReturn<typeof sum>;
```

> <Info inline /> Dica: veremos em breve o utilty type `ReturnType<T>`
