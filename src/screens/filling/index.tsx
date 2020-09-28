import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import CheckoutStepper, {
  Steps,
} from '../../components/navigation/CheckoutStepper';

const Filling: FC = () => {
  return (
    <PageWrapper>
      <CheckoutStepper activeStep={Steps.FILLING} />
    </PageWrapper>
  );
};

export default Filling;
