(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = 'Axel';
  console.log(`${myCustomVariable}, ${typeof myCustomVariable}`);

  myCustomVariable = 20;
  console.log(`${myCustomVariable}, ${typeof myCustomVariable}`);

  myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: ['Ninguno'],
  };
  console.log(myCustomVariable, typeof myCustomVariable);
})();
