# Void

<div />

Funções que retornam `undefined` são marcadas como `void`.
Isso quer dizer que funções, provavelmente com efeitos colaterais, que
não serão usadas para atribuições em variáveis:

```ts twoslash
function log(message: string): void {
  console.log(message);
}
```

E como visto anteriormente, o compilador faz o tracing de todos os possiveis retornos então
podemos deixar o 'trabalho'para auto inferencia aqui também:

```ts twoslash
function log(message: string) {
  console.log(message);
}
```
