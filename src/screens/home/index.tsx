import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { PageWrapper } from '../../components/globals/styles';
import logo from '../../resources/svg/logoVertical.svg';

const Container = styled(PageWrapper)`
  padding-top: 120px;

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 60%;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    width: 40%;
  }
`;

const StartButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: ${(props) => props.theme.colors.white} !important;
  width: 60%;
  margin-top: 80px !important;
  
  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    width: 360px;
    margin-top: 300px !important;
    padding: 25px !important;
    font-size: 2rem !important;
    
    .MuiSvgIcon-root {
      font-size: 2rem !important;
    }
`;

const Home: FC = () => {
  return (
    <Container>
      <Logo src={logo} />
      <StartButton variant='contained' endIcon={<ArrowForwardIcon />}>
        Iniciar
      </StartButton>
    </Container>
  );
};

export default Home;
