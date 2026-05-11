# Narrowing

Um aspecto interessante de Union Types: o compilador TypeScript é esperto o bastante para intuir tipos automaticamente baseado em contexto:

```ts {monaco}
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    return;
  }

  console.log(value.toFixed(2));
}
```
