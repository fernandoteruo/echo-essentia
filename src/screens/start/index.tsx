import React, { FC } from 'react';
import styled from 'styled-components';
import { Container, PageWrapper } from '../../components/globals/styles';
import Logo from './components/logo';
import StartButton from './components/startButton';

const Wrapper = styled(PageWrapper)`
  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: column;
  }
`;

const Start: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
      <Container>
        <StartButton />
      </Container>
    </Wrapper>
  );
};

export default Start;
