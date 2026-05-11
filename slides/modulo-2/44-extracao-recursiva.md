# Extração Recursiva

```ts {monaco}
// Checamos se a string contém um parametro que seja seguido de "/", ou seja: no meio da rota
type ExtractRouteParams<T> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | ExtractRouteParams<Rest> // Aqui extraimos o "userId" e com a union type entramos em recursão
  : T extends `${string}:${infer Param}` // "postId" está no fim, não contém / após ele
    ? Param
    : never; // Se nao finaliza em parametro, nos retornamos 'never' para ser ignorado

type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;
```
