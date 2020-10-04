import React, { FC, useEffect, useState } from 'react';
import MuiBackdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/order/Stepper';
import Info from './components/Info';
import Options from './components/Options';
import ReturnButton from '../../components/navigation/ReturnButton';
import { Container } from '../../components/order/Actions';
import PaymentDialog from './components/Dialog';
import { PrimaryButton } from '../../components/form/Button';
import { IRootReducer } from '../../store';
import { IVolume, PaymentStatus, PaymentType } from '../../model/order';
import { usePaymentRequest, usePaymentResponse } from './hooks/usePayment';

const Backdrop = styled(MuiBackdrop)`
  z-index: 1 !important;
`;

const Payment: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [paymentType, setPaymentType] = useState<PaymentType>(
    PaymentType.DEBIT,
  );
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const selectedVolume = useSelector<IRootReducer, IVolume | null>(
    (state) => state.order.volume,
  );
  const { handleResponse } = usePaymentResponse();
  const {
    payment,
    isAwaitingPayment,
    tryPayment,
    cancelPayment,
  } = usePaymentRequest();

  const handlePaymentChange = (type: PaymentType) => {
    setPaymentType(type);
  };

  const handlePaymentRequest = () => {
    setIsDisabled(true);
    setIsDialogVisible(true);
    tryPayment(paymentType, selectedVolume?.price || 0);
  };

  const handlePaymentCancel = () => {
    cancelPayment();
  };

  useEffect(() => {
    if (!isAwaitingPayment && payment) {
      setIsDialogVisible(false);
      setIsDisabled(payment?.status === PaymentStatus.SUCCESS);
      handleResponse(payment);
    }
  }, [isAwaitingPayment, payment, handleResponse]);

  return (
    <PageWrapper>
      <Backdrop open={isDisabled} />
      <Stepper activeStep={Steps.PAYMENT} />
      <Info price={selectedVolume?.price || 0} />
      <Options
        price={selectedVolume?.price || 0}
        paymentType={paymentType}
        onChange={handlePaymentChange}
      />
      {isDialogVisible ? (
        <PaymentDialog onCancel={handlePaymentCancel} />
      ) : null}
      <Container>
        <ReturnButton label='Voltar' url='/volumes' />
        <PrimaryButton onClick={handlePaymentRequest} disabled={isDisabled}>
          Pagar
        </PrimaryButton>
      </Container>
    </PageWrapper>
  );
};

export default Payment;
