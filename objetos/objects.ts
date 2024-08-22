(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Alen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo'],
  };

  console.log(flash);

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper velocidad'],
  };
})();
