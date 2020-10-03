export interface IVolume {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  amount: number;
  price: number;
}

export const getAvailableVolume: (
  kioskId: string,
  productId: string,
) => IVolume[] = (kioskId, productId) => {
  const MOCKED_VOLUME = [
    {
      id: 'volume1',
      productId: 'product1',
      amount: 20,
      price: 1234,
      productName: 'Kaiak Oceano',
      productImage:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    },
    {
      id: 'volume2',
      productId: 'product1',
      amount: 40,
      price: 2234,
      productName: 'Kaiak Oceano',
      productImage:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    },
    {
      id: 'volume3',
      productId: 'product1',
      amount: 60,
      price: 3234,
      productName: 'Kaiak Oceano',
      productImage:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    },
    {
      id: 'volume4',
      productId: 'product1',
      amount: 80,
      price: 4234,
      productName: 'Kaiak Oceano',
      productImage:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    },
    {
      id: 'volume5',
      productId: 'product1',
      amount: 100,
      price: 5234,
      productName: 'Kaiak Oceano',
      productImage:
        'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    },
  ];
  return MOCKED_VOLUME;
};
