# Intersection Types

Combina múltiplos tipos.

```ts twoslash
type User = {
  name: string
}

type Admin = {
  permissions: string[]
}

type AdminUser = User & Admin
```
