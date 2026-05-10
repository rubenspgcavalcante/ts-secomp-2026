# Exemplo

```ts twoslash
type Result<T> = T extends string
  ? 'text'
  : 'other'

type A = Result<string>
type B = Result<number>
```
