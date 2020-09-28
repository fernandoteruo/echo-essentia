import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import CheckoutStepper, {
  Steps,
} from '../../components/navigation/CheckoutStepper';

const Payment: FC = () => {
  return (
    <PageWrapper>
      <CheckoutStepper activeStep={Steps.PAYMENT} />
    </PageWrapper>
  );
};

export default Payment;
