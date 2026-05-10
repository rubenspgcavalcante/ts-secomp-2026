# Interfaces podem ser extendidas

<div />

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
