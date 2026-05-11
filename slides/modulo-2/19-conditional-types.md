# Conditional Types

Tipos condicionais alteram o valor do tipo final baseado em uma expressao lógica:

```ts twoslash
type IsString<T> = T extends string ? true : false;
```

Parece simples, mas é super poderoso.
