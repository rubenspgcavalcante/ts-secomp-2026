# Template Literal Types

Tipos baseados em string templates, limita o formato deles:

```ts {monaco}
type Version = "v1" | "v2" | "alpha";

type Route = `/api/${Version}/user`;

// Funciona
const userAPI: Route = "/api/v2/user";

// Não funciona
const brokenAPI: Route = "/api/v9/user";
```
