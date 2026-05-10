# Funções

Parametros e retorno:

```ts {monaco}
function sum(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

Porém podemos usar a auto inferencia do TypeScript e omitir o retorno:

```ts twoslash
function sum(a: number, b: number) {
  return a + b;
}

const result = sum(1, 1);
```
