# Exemplo

```ts {monaco}
type ApiResponse<T> = {
  data: T
  success: boolean
}

type User = {
  name: string
}

const response: ApiResponse<User> = {
  data: {
    name: 'Lucas'
  },
  success: true
}
```
