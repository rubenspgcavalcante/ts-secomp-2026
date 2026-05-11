# Literal Types

Tipos literais contem valores estaticos que limitam o que pode ou não ser atribuido à variável:

```ts {monaco}
type Theme = "dark" | "light";
type ThemeId = 1 | 2;

const theme: Theme = "dark";

// Não pode ser atribuido!
const themeId: ThemeId = 3;
```
