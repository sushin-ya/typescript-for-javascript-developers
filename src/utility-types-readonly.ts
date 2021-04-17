export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'ham',
  age: 43,
};

me.age++;

console.log(me);

type PesonalDataType = Readonly<Profile>;

const friend: PesonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
