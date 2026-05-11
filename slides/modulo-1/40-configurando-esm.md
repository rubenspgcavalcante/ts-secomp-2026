# Configurando ESM

Nos vamos alterar o `tsconfig.json`:

```bash
  "module": "esnext",
  "target": "esnext",
  "moduleResolution": "bundler",
```

E transformar nosso modulo em ESM alterando o `package.json`:

```bash
  "type": "module",
```

Pronto para rodar!

```bash
npx webpack
```
