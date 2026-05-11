# Exemplo

```ts {monaco}
type Features = {
  darkMode: () => void;
  notifications: () => void;
};

type FeatureFlags = {
  [K in keyof Features]: boolean;
};
```

Criando campos opcionais:

```ts {monaco}
type User = {
  name: string;
  age: number;
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};
```

> <Info inline /> Dica: veremos em breve o utilty type `Partial<T>`
