# keyof

Obtém as chaves de um tipo.

```ts twoslash
type User = {
  name: string;
  age: number;
};

type Keys = keyof User;
```
