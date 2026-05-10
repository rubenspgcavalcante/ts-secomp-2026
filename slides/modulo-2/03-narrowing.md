# Narrowing

O TypeScript reduz o tipo automaticamente.

```ts {monaco}
function print(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
    return
  }

  console.log(value.toFixed(2))
}
```
