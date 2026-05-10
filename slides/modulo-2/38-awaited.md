# Awaited

Resolve Promises.

```ts twoslash
async function fetchUser() {
  return {
    name: 'Lucas'
  }
}

type User = Awaited<
  ReturnType<typeof fetchUser>
>
```
