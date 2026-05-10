# E interfaces podem ser extendidas

Conceitos básicos de herança:

```ts twoslash
interface Person {
  name: string;
}

interface Citzen extends Person {
  country: string;
}

const citzen: Citzen = {
  name: "Rubens",
  country: "Brasil",
};

const person: Person = citzen;
```
