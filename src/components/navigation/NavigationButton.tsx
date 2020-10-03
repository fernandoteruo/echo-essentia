import React, { FC } from 'react';
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';
import Button, { Icon, Label } from './Button';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

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
  shouldShowIcon?: boolean;
}

const NavigationButton: FC<IProps> = ({
  url,
  label,
  isDisabled = false,
  shouldShowIcon = true,
}: IProps) => {
  const history = useHistory();

  const navigateNext = () => {
    history.push(`${url}`);
  };

  return (
    <StyledButton onClick={navigateNext} disabled={isDisabled}>
      <Label>{label}</Label>
      {shouldShowIcon ? (
        <Icon>
          <ArrowForwardIcon />
        </Icon>
      ) : null}
    </StyledButton>
  );
};

export default NavigationButton;
