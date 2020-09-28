import React, { FC } from 'react';
import { Step, StepLabel, Stepper as MuiStepper } from '@material-ui/core';
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

const Stepper: FC<IProps> = ({ activeStep }: IProps) => {
  const steps = getSteps();

  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <StyledStep key={label}>
          <StepLabel>{label}</StepLabel>
        </StyledStep>
      ))}
    </MuiStepper>
  );
};

export default Stepper;
