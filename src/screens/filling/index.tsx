import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';

const Filling: FC = () => {
  return (
    <PageWrapper>
      <Stepper activeStep={Steps.FILLING} />
    </PageWrapper>
  );
};

export default Filling;
