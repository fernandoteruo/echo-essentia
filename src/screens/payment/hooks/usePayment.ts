import PaymentType from '../api/payment';
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

export default usePaymentTypeLabel;
