import { IPayment, PaymentStatus, PaymentType } from '../../../model/order';

const MOCK_PAYMENT_TIMEOUT = 3000;

const sendPaymentRequest: (
  type: PaymentType,
  price: number,
) => Promise<IPayment> = (type, price) => {
  return new Promise<IPayment>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        type,
        price,
        status: PaymentStatus.SUCCESS,
        id: '',
      });
    }, MOCK_PAYMENT_TIMEOUT);
  });
};

export default sendPaymentRequest;
