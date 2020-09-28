import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';

const Volume: FC = () => {
  return (
    <PageWrapper>
      <Stepper activeStep={Steps.VOLUME} />
    </PageWrapper>
  );
};

export default Volume;
