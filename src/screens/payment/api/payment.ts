export interface IPayment {
  productId: string;
  productName: string;
  productImage: string;
  volumeId: string;
  volumeName: string;
  price: number;
}

export enum PaymentType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
  CREDIT_INSTALLS_2 = 'CREDIT_INSTALLS_2',
}

export const getPaymentInfo: () => IPayment = () => {
  const MOCKED_PAYMENT = {
    productId: 'product1',
    productName: 'Kaiak Oceano',
    productImage:
      'http://static.natura.com/cdn/farfuture/HU1ytcshnCb4FlG45EaRVc1yjykRc4L7PGSFxTWbXbI/1598369171/sites/default/files/styles/original/public/2020-08/400x400%20-%20Kaiak.jpg?itok=QXYqD5qI',
    volumeId: 'volume1',
    volumeName: '50ml',
    price: 1000,
  };
  return MOCKED_PAYMENT;
};
