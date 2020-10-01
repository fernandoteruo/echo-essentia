import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Logo from './components/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';
import DevelopedBy from './components/DevelopedBy';

const Wrapper = styled(PageWrapper)`
  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: column;
  }
`;

const Container = styled.div`
  height: 47vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

const ContainerDevelopedBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
      <Container>
        <NavigationButton url='/products' label='Iniciar' />
      </Container>
      <ContainerDevelopedBy>
        Uma solução:
        <DevelopedBy />
      </ContainerDevelopedBy>
    </Wrapper>
  );
};

export default Start;
