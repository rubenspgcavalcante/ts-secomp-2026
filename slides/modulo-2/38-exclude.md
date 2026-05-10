# Exclude

Remove tipos de unions.

```ts twoslash
type Status =
  | 'success'
  | 'error'
  | 'loading'

type FinalStatus = Exclude<
  Status,
  'loading'
>
```
