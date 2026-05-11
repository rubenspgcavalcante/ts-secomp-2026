# Union Types

A vezes uma variável pode aceitar mais de um tipo:

```ts {monaco}
// Funciona como um "OU"
let value: string | number;

value = "hello";
value = 10;
```

Isso será muito útil quando estivermos trabalhando com
morfismo e o uso de "Duck Typing" em TypeScript
