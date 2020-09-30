export interface IProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const getProducts: (kioskId: string) => IProduct[] = (kioskId) => {
  const MOCKED_PRODUCTS = [
    {
      id: 'id1',
      category: 'KAIAK',
      name: 'Kaiak Oceano Masculino',
      description: 'Sinta a sensação de liberdade de uma onda do mar',
      imageUrl:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
      price: 1234,
    },
    {
      id: 'id2',
      category: 'KAIAK',
      name: 'Kaiak Oceano Masculino',
      description:
        'Fragrância com muita energia para você viver sua escalada de emoções',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/lKcgjlJr14oZST9xVZezRXPO4A7zQ2Auolxy7w3oCEA/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Aventura.jpg?itok=kZf4y0zb',
      price: 4321,
    },
    {
      id: 'id3',
      category: 'KAIAK',
      name: 'Kaiak Pulso',
      description: 'Adreanalina que pulsa do seu movimento',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/rjPP6DyF3mEOPnHy9HEODj16ZfjNBGjA7eHHNMeJdRg/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Pulso.jpg?itok=Tapp0mQB',
      price: 6969,
    },
  ];
  return MOCKED_PRODUCTS;
};
