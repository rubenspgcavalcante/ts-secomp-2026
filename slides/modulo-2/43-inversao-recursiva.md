# Inversão Recursiva

```ts {monaco}
// Aqui usamos o 'spread' para inferir o resto do array e extrair apenas o primeiro
type Reverse<T extends Array<unknown>> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First] // Entramos em recursão, colocando o primeiro agora como último
  : [];

type Result = Reverse<[1, 2, 3]>;
```
