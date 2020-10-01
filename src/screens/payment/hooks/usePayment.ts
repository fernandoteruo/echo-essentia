import { useEffect, useState } from 'react';
import { getPaymentInfo, IPayment, PaymentType } from '../api/payment';
import useCurrencyMasked from '../../../hooks/formatter';

export const usePaymentTypeLabel: (
  totalPrice: number,
) => Record<PaymentType, string> = (totalPrice) => {
  const label: Record<PaymentType, string> = {
    [PaymentType.DEBIT]: 'Débito à vista',
    [PaymentType.CREDIT]: 'Crédito à vista',
    [PaymentType.CREDIT_INSTALLS_2]: `Crédito 2x de ${useCurrencyMasked(
      totalPrice / 2,
    )}`,
  };
  return label;
};

const usePayment: () => IPayment | null = () => {
  const [payment, setPayment] = useState<IPayment | null>(null);

  useEffect(() => {
    const fetchedAvailable = getPaymentInfo();
    setPayment(fetchedAvailable);
  }, []);

  return payment;
};

export default usePayment;
