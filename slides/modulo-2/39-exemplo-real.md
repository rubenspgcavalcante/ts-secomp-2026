# Exemplo Real

```ts {monaco}
async function fetchUser() {
  return {
    name: "Lucas",
  };
}

type User = Awaited<ReturnType<typeof fetchUser>>;
```
