# Como o TS funciona?

```mermaid
flowchart LR
    A[TypeScript .ts] --> B[tsc]
    B --> C[JavaScript .js]
    C --> D[Navegador / Node]
```

O compilador TypeScript (`tsc`) é responsável por:

- realizar a checagem de tipos
- transpilar TypeScript para JavaScript
- gerar diferentes formatos de módulos

O código gerado pode utilizar:

- ESM (EcmaScript Modules)
- CommonJS (Node.js)
- UMD (Universal Module Definition)
