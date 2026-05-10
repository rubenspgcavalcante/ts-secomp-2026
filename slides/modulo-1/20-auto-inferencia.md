# Auto inferência

Auto inferencia não é exclusiva para retornos de funções, mas para qualquer tipo de atribuição com expressões tipadas:

```ts twoslash
const language = "TypeScript";
const version = 6;

const user = {
  name: "Rubens",
  age: 18, // Será?... <insira meme do João Inácio Júnior 🕺>
};
```

Inferencia Contextual:

```ts twoslash
const nomes = ["Ana", "Carlos"];

nomes.forEach((nome) => {
  // A variável nome é inferida como string, por que nomes é um string[]
  console.log(nome.toUpperCase());
});
```
