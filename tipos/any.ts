(() => {
  let avenger: any = 123;
  let exist;
  let power;

  avenger = 'Dr. Strange';
  // console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0)); // Trata a avenger como un string sin eliminar el tipado 'any', también se puede utilizar la sintaxis de abajo

  avenger = 150.293847;
  // console.log(avenger.toFixed(2));
  console.log(<number>avenger.toFixed(2)); // Trata a avenger como un number sin eliminar el tipado 'any', también se puede utilizar la sintaxis de arriba

  console.log(exist);
  console.log(power);
})();
