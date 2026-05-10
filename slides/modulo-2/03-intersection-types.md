# Intersection Types

<div/>

Combina múltiplos tipos. Uma forma de extender eles:

```ts {monaco} {class:'max-h-90 overflow-auto'}
type User = {
  name: string;
};

type AdminRole = {
  permissions: ["read", "write", "execute"];
};

type GuestRole = {
  permissions: ["read"];
};

type AdminUser = User & AdminRole;

type GuestUser = User & GuestRole;

const admin: AdminUser = {
  name: "Rubens",
  permissions: ["read", "write", "execute"],
};

const guest: GuestUser = {
  name: "Fulano",
  permissions: ["read"],
};
```
