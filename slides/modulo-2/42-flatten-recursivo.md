# Flatten Recursivo

```ts {monaco}
// Inferimos o tipo e se esse tipo for um Array -> recursão
type DeepFlatten<T> = T extends Array<infer U> ? DeepFlatten<U> : T[];

type Example = DeepFlatten<string[][][][]>;

const example2 = [
  [1, 2, 3],
  [2, 3, [4, 5]],
];

const flat: DeepFlatten<typeof example2> = example2.flat(2);
```
