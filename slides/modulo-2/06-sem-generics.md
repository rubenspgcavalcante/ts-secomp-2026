# Sem Generics

<div />

Código duplicado, mesma função com uma pequena mudança de sua assinatura:

```ts {monaco}
function firstString(values: string[]) {
  return values[0];
}

function firstNumber(values: number[]) {
  return values[0];
}
```
