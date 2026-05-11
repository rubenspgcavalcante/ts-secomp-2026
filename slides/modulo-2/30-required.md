# Required

Torna tudo obrigatório.

```ts twoslash
type User = {
  name?: string;
  number?: number;
};

type FullUser = Required<User>;
```
