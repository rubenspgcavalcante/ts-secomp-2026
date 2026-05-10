# Template Literal Types

```ts {monaco}
type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'lg'

type ButtonClass = `${Variant}-${Size}`

const button: ButtonClass = 'primary-sm'
```
