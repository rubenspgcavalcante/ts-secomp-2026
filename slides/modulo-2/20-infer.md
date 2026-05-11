# infer

Permite inferir tipos internamente.

```ts twoslash
type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;
```

> <Info inline /> Bastante utilizado quando bibliotecas expõem tipos compostos, mas nao seus tipos 'simples'
