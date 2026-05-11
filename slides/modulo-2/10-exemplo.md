# Exemplo

```ts {monaco}
type ApiResponse<T> = {
  data: T;
  success: boolean;
  statusCode: number;
};

type User = {
  name: string;
};

const response: ApiResponse<User> = {
  data: {
    name: "Lucas",
  },
  success: true,
  statusCode: 200,
};
```
