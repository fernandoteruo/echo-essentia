import { IProduct } from '../../../context/Checkout';

const getProducts: (kioskId: string) => IProduct[] = (kioskId) => {
  const MOCKED_PRODUCTS = [
    {
      id: 'product1',
      category: 'KAIAK',
      name: 'Kaiak Oceano Masculino',
      imageUrl:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
      price: 1234,
      description: '',
    },
    {
      id: 'product2',
      category: 'KAIAK',
      name: 'Kaiak Aventura',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/lKcgjlJr14oZST9xVZezRXPO4A7zQ2Auolxy7w3oCEA/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Aventura.jpg?itok=kZf4y0zb',
      price: 4321,
      description: '',
    },
    {
      id: 'product3',
      category: 'KAIAK',
      name: 'Kaiak Pulso',
      imageUrl:
        'https://static.natura.com/cdn/farfuture/rjPP6DyF3mEOPnHy9HEODj16ZfjNBGjA7eHHNMeJdRg/1598369195/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak%20Pulso.jpg?itok=Tapp0mQB',
      price: 6969,
      description: '',
    },
  ];
  return MOCKED_PRODUCTS;
};

export default getProducts;
