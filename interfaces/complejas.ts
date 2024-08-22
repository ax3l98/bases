(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Axel',
    age: 25,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Tijuana',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: 'Ara',
    age: 20,
    address: {
      id: 124,
      zip: 'KY1 NOT',
      city: 'Tucson',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
