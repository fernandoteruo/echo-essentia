import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Instructions from './components/Instructions';
import ModalLoading from '../../components/feedback/ModalLoading';
import { PrimaryButton } from '../../components/form/Button';

const Filling: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleFill = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/thank-you');
    }, 5000);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  });

  return (
    <PageWrapper>
      {isLoading ? <ModalLoading /> : null}
      <Stepper activeStep={Steps.FILLING} />
      <Instructions />
      <PrimaryButton onClick={handleFill}>Encher</PrimaryButton>
    </PageWrapper>
  );
};

export default Filling;
