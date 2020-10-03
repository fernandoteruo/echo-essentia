import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Instructions, { BUTTON_LABEL } from './components/Instructions';
import ModalLoading from '../../components/feedback/ModalLoading';
import { PrimaryButton } from '../../components/form/Button';
import useFilling from './hooks/useFilling';
import AppBar from '../../components/checkout/AppBar';

const Filling: FC = () => {
  const { isLoading, tryFill } = useFilling();

  const handleFill = () => {
    tryFill();
  };

  return (
    <PageWrapper>
      {isLoading ? <ModalLoading /> : null}
      <AppBar />
      <Stepper activeStep={Steps.FILLING} />
      <Instructions />
      <PrimaryButton onClick={handleFill}>{BUTTON_LABEL}</PrimaryButton>
    </PageWrapper>
  );
};

export default Filling;
