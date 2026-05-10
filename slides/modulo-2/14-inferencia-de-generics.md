# Inferência de Generics

```ts twoslash
function identity<T>(value: T): T {
  return value
}

const result = identity('hello')
```
