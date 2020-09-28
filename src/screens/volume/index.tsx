import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import CheckoutStepper, {
  Steps,
} from '../../components/navigation/CheckoutStepper';

const Volume: FC = () => {
  return (
    <PageWrapper>
      <CheckoutStepper activeStep={Steps.VOLUME} />
    </PageWrapper>
  );
};

export default Volume;
