# strictNullChecks

```ts twoslash
const user = null;

console.log(user.name);
```

Mesmo que declaremos um 'union type', valores estáticos constantes
são avaliados em tempo de compilação:

```ts twoslash
const user: { name: string } | null = null;

console.log(user?.name);
```
