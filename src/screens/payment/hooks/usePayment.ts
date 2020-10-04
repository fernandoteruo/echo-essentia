import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useCurrencyMasked from '../../../hooks/formatter';
import { IPayment, PaymentStatus, PaymentType } from '../../../model/order';
import { Severity, SnackbarContext } from '../../../context/Snackbar';
import sendPaymentRequest from '../api/payment';
import { setPayment as actionSetPayment } from '../../../store/order/actions';

const TIMEOUT_REDIRECT = 3000;

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

export const usePaymentRequest = () => {
  const [isAwaitingPayment, setIsAwaitingPayment] = useState(false);
  const [payment, setPayment] = useState<IPayment | null>(null);

  const tryPayment = async (paymentType: PaymentType, value: number) => {
    try {
      setIsAwaitingPayment(true);
      const response = await sendPaymentRequest(paymentType, value);
      setPayment(response);
      setIsAwaitingPayment(false);
    } catch (e) {
      console.log(e);
    }
  };

  const cancelPayment = () => {
    setIsAwaitingPayment(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return {
    isAwaitingPayment,
    payment,
    tryPayment,
    cancelPayment,
  };
};

export const usePaymentResponse = () => {
  const snackbar = useContext(SnackbarContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleResponse = (payment: IPayment) => {
    dispatch(actionSetPayment(payment));

    const { status } = payment;
    const snackbarMessage =
      status === PaymentStatus.SUCCESS
        ? 'Pagamento efetuado com sucesso'
        : 'Erro ao efetuar pagamento';
    const snackbarSeverity =
      status === PaymentStatus.SUCCESS ? Severity.SUCCESS : Severity.ERROR;

    snackbar?.setMessage(snackbarMessage);
    snackbar?.setSeverity(snackbarSeverity);
    snackbar?.setDuration(TIMEOUT_REDIRECT);
    snackbar?.setIsVisible(status !== PaymentStatus.NOT_REQUESTED);

    if (status === PaymentStatus.SUCCESS) {
      setTimeout(() => {
        snackbar?.setIsVisible(false);
        history.push('/filling');
      }, TIMEOUT_REDIRECT);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  });

  return {
    handleResponse,
  };
};

export default usePaymentTypeLabel;
