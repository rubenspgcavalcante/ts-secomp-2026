# Omit

Remove propriedades.

```ts twoslash
type User = {
  id: number
  name: string
  password: string
}

type SafeUser = Omit<User, 'password'>
```
