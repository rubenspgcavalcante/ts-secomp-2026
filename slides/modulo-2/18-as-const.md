# as const

Sinaliza que um valor ou propriedade é constante (imutável). Assim protege o valor especificado:

```ts {monaco}
const user = {
  name: "John",
  city: "Fortaleza" as const,
  roles: ["guest"] as const,
};

user.roles.push("admin");
user.city = "São Paulo";
```

Também força o TypeScript as ser mais específico

```ts {monaco}
const routes = {
  home: "/",
  users: "/users",
} as const;

type APIEndpoints = {
  [K in keyof typeof routes]: `/api/v1${(typeof routes)[K]}`;
};
```
