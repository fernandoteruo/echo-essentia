import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import React, { FC } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: ${(props) => props.theme.colors.white} !important;
  width: 50% !important;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

const Start: FC = () => {
  const history = useHistory();

  const navigateChecklist = () => {
    history.push('/checklist');
  };

  return (
    <StyledButton
      variant='contained'
      endIcon={<ArrowForwardIcon />}
      onClick={navigateChecklist}
    >
      Iniciar
    </StyledButton>
  );
};

export default Start;
