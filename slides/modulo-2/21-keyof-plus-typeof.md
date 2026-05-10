# keyof + typeof

```ts {monaco}
const colors = {
  primary: '#000',
  secondary: '#fff'
}

type ColorKeys = keyof typeof colors
```
