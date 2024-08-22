(() => {
  const error = (message: string): never | number => {
    if (true) {
      // throw new Error(message);
    }
    return 1;
  };

  error('Error');
  console.log('Hola, mundo!');
})();
