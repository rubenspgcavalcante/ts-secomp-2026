# Pick

Seleciona propriedades.

```ts twoslash
type User = {
  id: number
  name: string
  email: string
}

type UserPreview = Pick<User, 'id' | 'name'>
```
