import React, { FC } from 'react';
import styled from 'styled-components';
import { Container, PageWrapper } from '../../components/globals/styles';
import Logo from './components/logo';
import Start from './components/startButton';

const Wrapper = styled(PageWrapper)`
  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: column;
  }
`;

const Home: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Start />
      </Container>
    </Wrapper>
  );
};

export default Home;
