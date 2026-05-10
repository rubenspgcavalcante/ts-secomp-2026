# Optional Parameters

Nem sempre queremos adicionar parametros obrigatórios, para isso usamos o operador de declaração de tipo `?:`
para marcar-lo como opcional (possivel valor `undefined`):

```ts {monaco-run}
function greet(name?: string) {
  console.log(name);
}

greet();
```

Parametros opcionais não podem aparacer antes de obrigatórios:

```ts twoslash
function greet(name?: string, age: number) {
  console.log({ name, age });
}
```
