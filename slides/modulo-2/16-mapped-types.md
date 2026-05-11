# Mapped Types

Mapeia chaves como propriedades de um objeto:

```ts twoslash
type Options<T> = {
  [K in keyof T]: boolean;
};
```
