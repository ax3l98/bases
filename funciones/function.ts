(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBasisignal = (): string => {
    return 'Batiseñal activada!';
  };

  console.log(typeof activateBasisignal);

  const heroName = returnName();
})();
