(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis, el único');
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
  apocalipsis1.changeName('Xavier');
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
  // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... soy el único');
  // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... soy el único');
  // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... soy el único');
  // console.log(apocalipsis1);
  // console.log(apocalipsis2);
  // console.log(apocalipsis3);
})();
