# Unknown

<div />

A alternativa mais segura, já que força sua validação em runtime:

```ts twoslash
const value: unknown = "Rubens";

value.toUpperCase();
```

```ts twoslash
const value: unknown = "Rubens";

if (typeof value === "string") {
  value.toUpperCase();
}
```

As vezes uma API (REST, biblioteca, etc) não documentada pode conter tipos não conhecidos em tempo
de compilação, o que requer uma validação em tempo de execução: `unknown` é a escolha certa.
