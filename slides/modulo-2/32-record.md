# Record

Cria objetos tipados.

```ts {monaco}
type Role = "admin" | "user";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write"],
  user: ["read"],
};
```

Uma forma generica de definir objetos onde a chave e valor se mantém constantes
