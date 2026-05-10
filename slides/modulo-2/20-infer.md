# infer

Permite inferir tipos internamente.

```ts twoslash
type GetReturn<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never
```
