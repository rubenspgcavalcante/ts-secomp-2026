# never

Representa algo que nunca acontece (estados inalcançáveis):

```ts {monaco}
type A = string & number;
```

Podemos utilizar como algo que 'quebra o fluxo'

```ts {monaco}
function fail(message: string): never {
  throw new Error(message);
}

function getName(name?: string) {
  if (!name) {
    // Fluxo interrompido, mesmo efeito de um 'return'
    fail("Name is required");
  }

  // name não é mais string | undefined, e apenas string
  return name.toUpperCase();
}
```
