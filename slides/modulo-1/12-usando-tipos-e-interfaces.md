# Usando tipos e interfaces

```ts {monaco}
type User = {
  name: string;
  age: number;
};

interface Address {
  postCode: string;
  city: string;
  country: string;
}

const user: User = {
  name: "Lucas",
  age: 30,
};

const address: Address = {
  postCode: "123-456",
  city: "Fortress",
  country: "Republic of IT",
};
```
