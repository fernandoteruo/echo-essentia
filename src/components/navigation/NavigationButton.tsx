import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: ${(props) => props.theme.colors.white} !important;
  width: 40% !important;
  box-shadow: none !important;
  transition: opacity 500ms ease-out;

  :disabled {
    opacity: 0.7;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

interface IProps {
  url: string;
  label: string;
  isDisabled?: boolean;
}

const NavigationButton: FC<IProps> = ({
  url,
  label,
  isDisabled = false,
}: IProps) => {
  const history = useHistory();

  const navigateNext = () => {
    history.push(`${url}`);
  };

  return (
    <StyledButton
      variant='contained'
      endIcon={<ArrowForwardIcon />}
      onClick={navigateNext}
      disabled={isDisabled}
    >
      {label}
    </StyledButton>
  );
};

export default NavigationButton;
