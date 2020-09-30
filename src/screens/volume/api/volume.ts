export interface IVolume {
  id: string;
  productId: string;
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
    },
    {
      id: 'volume2',
      productId: 'product1',
      amount: 40,
      price: 2234,
    },
    {
      id: 'volume3',
      productId: 'product1',
      amount: 60,
      price: 3234,
    },
    {
      id: 'volume4',
      productId: 'product1',
      amount: 80,
      price: 4234,
    },
    {
      id: 'volume5',
      productId: 'product1',
      amount: 100,
      price: 5234,
    },
  ];
  return MOCKED_VOLUME;
};
