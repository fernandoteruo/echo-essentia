import React, { FC } from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import styled from 'styled-components';

const StyledStep = styled(Step)`
  .MuiStepIcon-root.MuiStepIcon-active {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

export enum Steps {
  PRODUCT,
  VOLUME,
  PAYMENT,
  FILLING,
}

const getSteps = () => {
  return ['Produto', 'Volume', 'Pagamento', 'Refill'];
};

interface IProps {
  activeStep: Steps;
}

const CheckoutStepper: FC<IProps> = ({ activeStep }: IProps) => {
  const steps = getSteps();

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <StyledStep key={label}>
          <StepLabel>{label}</StepLabel>
        </StyledStep>
      ))}
    </Stepper>
  );
};

export default CheckoutStepper;
