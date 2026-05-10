# Constraints

```ts {monaco}
function getLength<T extends { length: number }>(
  value: T
) {
  return value.length
}

getLength('hello')
getLength([1, 2, 3])
```
