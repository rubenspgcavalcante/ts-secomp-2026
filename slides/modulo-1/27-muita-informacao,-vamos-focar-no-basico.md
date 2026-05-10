# Muita informação, vamos focar no básico:

```json
{
  "compilerOptions": {
    "target": "esnext", // Precisamos polyfill para APIs nao suportadas?
    "module": "nodenext", // Sistema de modulos do output
    "strict": true, // Checagens como noImplicitAny, strictNullChecks, etc
    "rootDir": "./src", // Raiz do codigo fonte
    "outDir": "./dist", // Diretorio de saida
    "sourceMap": true // Sourcemaps, normalmente usado em ambiente de desenvolvimento
  }
}
```
