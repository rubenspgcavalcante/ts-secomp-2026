# Readonly

```ts {monaco}
type User = {
  name: string
}

const user: Readonly<User> = {
  name: 'Lucas'
}

// user.name = 'João'
```
