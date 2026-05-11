# Exemplo webpack.config.js

O ts-loader vai cuidar da transpilação de todo arquivo `.ts` quer passar
pelo Webpack:

```js
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
```
