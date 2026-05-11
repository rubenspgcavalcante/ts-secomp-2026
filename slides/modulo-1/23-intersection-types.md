# Intersection Types

Precisa satisfazer os DOIS tipos ao mesmo tempo

```ts {monaco}
type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

type Person = HasName & HasAge;
```
