# Interfaces foram construidos ao redor de Classes

E herda muito de onde TS se baseou, o C#. Por exemplo, isso é valido:

```ts {monaco-run}
interface User {
  name: string;
}

interface User {
  age: number;
}

class UserImpl implements User {
  name: string = "";
  age: number = 0;
}
```

Interfaces se mesclam em um escopo de mesmo namespace, dessa forma alteraçöes de
interface podem ser expandidas mais facilmente.
