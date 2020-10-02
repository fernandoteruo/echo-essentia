import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../start/components/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';

const Container = styled.div`
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

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 30px;
  text-align: center;
`;

const ThankYou: FC = () => {
  return (
    <PageWrapper>
      <Container>
        <Logo />
      </Container>
      <Text>Parabens, voce acabou de aquirir um incrivel perfume!</Text>
      <Text>
        A Natura e o Planeta agradecem pelo lixo que voce deixou de gerar.
      </Text>
      <NavigationButton url='/' label='Encerrar' shouldShowIcon={false} />
    </PageWrapper>
  );
};

export default ThankYou;
