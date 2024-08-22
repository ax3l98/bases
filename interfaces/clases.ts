(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  // class Mutante implements Xmen, Human {
  //   name: string;
  //   realName: string;
  //   mutantPower(id: number): string {
  //     throw new Error("Method not implemented.");
  //   }
  //   age: number;
  // }
})();
