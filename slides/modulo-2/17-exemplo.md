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
