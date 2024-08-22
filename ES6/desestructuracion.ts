(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.654,
  };

  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironman, ...rest }: Avengers) => {
    console.log(ironman);
    console.log(rest);
  };
  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = [
    'Cap. América',
    true,
    123.321,
  ];
  const [, ironman, hulk] = avengersArr;
  // console.log({ ironman, hulk });
})();
