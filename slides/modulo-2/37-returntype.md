# ReturnType

Obtém o retorno de uma função.

```ts twoslash
function getUser() {
  return {
    name: "Lucas",
  };
}

type User = ReturnType<typeof getUser>;
```
