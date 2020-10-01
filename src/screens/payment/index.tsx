import React, { FC, useState } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Actions from '../../components/checkout/Actions';
import usePayment from './hooks/usePayment';
import Info from './components/Info';
import PaymentType from './components/PaymentOptions';

const Payment: FC = () => {
  const payment = usePayment();
  const [isNextDisabled] = useState(true);

  return (
    <PageWrapper>
      <Stepper activeStep={Steps.PAYMENT} />
      <Info payment={payment} />
      <PaymentType price={payment?.price || 0} />
      <Actions
        urlReturn={`/products/${payment?.productId}/volume`}
        urlNext={`/products/${payment?.productId}/volume/${payment?.volumeId}/filling`}
        labelNext='Confirmar'
        labelReturn='Voltar'
        isDisabled={isNextDisabled}
      />
    </PageWrapper>
  );
};

export default Payment;
