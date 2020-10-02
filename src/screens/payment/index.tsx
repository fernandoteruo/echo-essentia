import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import usePayment from './hooks/usePayment';
import Info from './components/Info';
import PaymentType from './components/Options';
import ReturnButton from '../../components/navigation/ReturnButton';
import StyledButton from '../../components/checkout/StyledButton';
import { Container } from '../../components/checkout/Actions';
import PaymentDialog from './components/Dialog';

const Payment: FC = () => {
  const payment = usePayment();
  const [shouldShowPaymentDialog, setShouldSHowPaymentDialog] = useState(false);
  const history = useHistory();

  const handleOpen = () => setShouldSHowPaymentDialog(true);

  const handleClose = (shouldRedirect: boolean) => {
    setShouldSHowPaymentDialog(false);
    if (shouldRedirect) {
      history.push(
        `/products/${payment?.productId}/volume/${payment?.volumeId}/filling`,
      );
    }
  };

  return (
    <PageWrapper>
      <Stepper activeStep={Steps.PAYMENT} />
      <Info payment={payment} />
      <PaymentType price={payment?.price || 0} />
      {shouldShowPaymentDialog ? <PaymentDialog onClose={handleClose} /> : null}
      <Container>
        <ReturnButton
          label='Voltar'
          url={`/products/${payment?.productId}/volume`}
        />
        <StyledButton onClick={handleOpen}>Pagar</StyledButton>
      </Container>
    </PageWrapper>
  );
};

export default Payment;
