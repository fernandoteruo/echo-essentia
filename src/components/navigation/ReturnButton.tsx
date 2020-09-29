import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.grey} !important;
  color: ${(props) => props.theme.colors.grey} !important;
  width: 40% !important;

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
  url?: string;
  label: string;
}

const ReturnButton: FC<IProps> = ({ label, url }: IProps) => {
  const history = useHistory();

  const navigateReturn = () => {
    if (url) {
      history.push(url);
    } else {
      history.goBack();
    }
  };

  return (
    <StyledButton
      variant='contained'
      startIcon={<ArrowBack />}
      onClick={navigateReturn}
    >
      {label}
    </StyledButton>
  );
};

export default ReturnButton;
