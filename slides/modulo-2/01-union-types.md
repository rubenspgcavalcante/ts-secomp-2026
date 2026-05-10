# Union Types

<div />

Como vimos antes, uma union permite múltiplos tipos:

```ts {monaco}
type ID = string | number;

let userId: ID;

userId = 10;
userId = "abc";
```
