import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import usePayment from './hooks/usePayment';
import Info from './components/Info';
import PaymentType from './components/PaymentOptions';
import ReturnButton from '../../components/navigation/ReturnButton';
import StyledButton from '../../components/checkout/StyledButton';
import { Container } from '../../components/checkout/Actions';

const Payment: FC = () => {
  const payment = usePayment();

  const handleClick = () => {};

  return (
    <PageWrapper>
      <Stepper activeStep={Steps.PAYMENT} />
      <Info payment={payment} />
      <PaymentType price={payment?.price || 0} />
      <Container>
        <ReturnButton
          label='Voltar'
          url={`/products/${payment?.productId}/volume`}
        />
        <StyledButton onClick={handleClick}>Pagar</StyledButton>
      </Container>
    </PageWrapper>
  );
};

export default Payment;
