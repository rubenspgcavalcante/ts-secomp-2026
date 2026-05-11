# Com Generics

Implementação única, com inferencia do tipo desconhecido como um genérico:

```ts {monaco}
function first<T>(values: T[]): T {
  return values[0];
}

const a = first(["a", "b"]);

const b = first([1, 2, 3]);
```
