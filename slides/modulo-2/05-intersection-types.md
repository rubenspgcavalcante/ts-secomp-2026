# Intersection Types

```ts {monaco}
type User = {
  name: string
}

type Admin = {
  permissions: string[]
}

type AdminUser = User & Admin

const admin: AdminUser = {
  name: 'Lucas',
  permissions: ['read', 'write']
}
```
