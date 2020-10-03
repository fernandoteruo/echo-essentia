import React, { FC } from 'react';
import { Step, StepLabel, Stepper as MuiStepper } from '@material-ui/core';
import styled from 'styled-components';
import clientPB from '../../resources/svg/natura/logoPB.svg';
import iconPB from '../../resources/svg/echoEssentia/iconPB.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
`;

const StyledImage = styled.img`
  display: none;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    display: flex;
    width: 45px;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    width: 55px;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
    width: 65px;
  }
`;

const StyledStep = styled(Step)`
  .MuiStepIcon-root.MuiStepIcon-active {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .MuiStepConnector-root {
    display: none;
  }

  .MuiStepIcon-root.MuiStepIcon-completed {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

export enum Steps {
  PRODUCT,
  VOLUME,
  PAYMENT,
  FILLING,
}

const StyledStepper = styled(MuiStepper)`
  background-color: ${({ theme: { colors } }) => colors.background} !important;
`;

const getSteps = () => {
  return ['Produto', 'Volume', 'Pagamento', 'Refill'];
};

interface IProps {
  activeStep: Steps;
}

const Stepper: FC<IProps> = ({ activeStep }: IProps) => {
  const steps = getSteps();

  return (
    <Container>
      <StyledImage src={clientPB} />
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <StyledStep key={label}>
            <StepLabel>{label}</StepLabel>
          </StyledStep>
        ))}
      </StyledStepper>
      <StyledImage src={iconPB} />
    </Container>
  );
};

export default Stepper;
