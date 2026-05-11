# Readonly

```ts twoslash
type User = {
  name: string;
};

const user: Readonly<User> = {
  name: "Lucas",
};

user.name = "João";
```

> <Info inline /> `Readonly<T>` não especifica as propriedades igual ao "as const"

```ts twoslash
const config: Readonly<{
  theme: string;
}> = { theme: "dark" };

type ReadonlyConfig = typeof config;
```
