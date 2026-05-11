# Inferência de Generics

```ts twoslash
function identity<T>(value: T): T {
  return value;
}

// Coloque o mouse em cima de `result` para ver o tipo inferido
const result = identity("hello");
```
