# Mapped Types

Transformam tipos dinamicamente.

```ts twoslash
type Options<T> = {
  [K in keyof T]: boolean;
};
```
