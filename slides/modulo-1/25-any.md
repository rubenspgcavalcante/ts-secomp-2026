# Any

<div />

Quando bate o desespero

```ts {monaco}
let value: any = 10;

value = "hello";
value = true;
```

Any representa qualquer tipo, e por aceitar 'qualquer coisa' se
torna um workaround muito comumente usado para burlar type checks
mais rigidos

⚠️ Porém evite usar `any`
