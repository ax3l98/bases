(() => {
  type Avenger = {
    name: string;
    wapon: string;
  };

  const ironman: Avenger = {
    name: 'Iron Man',
    wapon: 'Armorsuit',
  };
  const captainAmerica: Avenger = {
    name: 'Capitán América',
    wapon: 'Shield',
  };
  const thor: Avenger = {
    name: 'Thor',
    wapon: 'Mjolnir',
  };

  const avengers: Avenger[] = [ironman, thor, captainAmerica];
  for (const avenger of avengers) {
    console.log(avenger.name, avenger.wapon);
  }
})();
