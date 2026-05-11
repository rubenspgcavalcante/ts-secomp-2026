# Exemplo

```ts {monaco-run}
type User = {
  name: string;
  age: number;
};

function updateUser(user: Partial<User>) {
  console.log(user);
}

updateUser({ age: 31 });
```

> <Info inline /> Muito utilizado em testes automatizados, especialmente em 'mocks'
