# Parameters

Obtém os parâmetros de uma função.

```ts twoslash
function sum(a: number, b: number) {
  return a + b;
}

type Params = Parameters<typeof sum>;
```
