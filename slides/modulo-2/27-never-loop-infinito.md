# never: loop infinito

Outro exemplo:

```ts {monaco}
function infinite(): never {
  while (true) {}
}
```

Essa função também nunca irá alcançar um return
