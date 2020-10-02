import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Instructions from './components/Instructions';
import StyledButton from '../../components/checkout/StyledButton';
import ModalLoading from '../../components/feedback/ModalLoading';

const Filling: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  let timeoutRef: ReturnType<typeof setTimeout>;

  const handleFill = () => {
    setIsLoading(true);
    timeoutRef = setTimeout(() => {
      setIsLoading(false);
      history.push('/thank-you');
    }, 10000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef);
    };
  });

  return (
    <PageWrapper>
      {isLoading ? <ModalLoading /> : null}
      <Stepper activeStep={Steps.FILLING} />
      <Instructions />
      <StyledButton onClick={handleFill}>Pagar</StyledButton>
    </PageWrapper>
  );
};

export default Filling;
