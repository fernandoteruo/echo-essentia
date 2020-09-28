import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';

const Payment: FC = () => {
  return (
    <PageWrapper>
      <Stepper activeStep={Steps.PAYMENT} />
    </PageWrapper>
  );
};

export default Payment;
