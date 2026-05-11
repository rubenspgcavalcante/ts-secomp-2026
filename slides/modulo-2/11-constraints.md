# Constraints

Podemos 'limitar' os generics e seu morfismo geral usando `extends`:

```ts {monaco}
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}

getLength("hello");
getLength([1, 2, 3]);
```

Dessa forma qualquer tipo que respeite esse morfismo é aceito como valido
