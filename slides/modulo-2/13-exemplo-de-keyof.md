# Exemplo de keyof

```ts {monaco}
type User = {
  name: string;
  age: number;
};

function getProperty(user: User, key: keyof User) {
  return user[key];
}
```
