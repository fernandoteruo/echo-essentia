import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../../components/checkout/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';
import DevelopedBy from '../../components/checkout/DevelopedBy';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled(Container)`
  height: 35vh;
`;

const Text = styled(Container)`
  padding: 30px;
  font-size: 1em;
  height: 20vh;

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    font-size: 1.25em;
  }
`;

const ButtonContainer = styled(Container)`
  height: 15vh;
`;

const ContainerDevelopedBy = styled(Container)`
  font-size: 11px;
  height: 10vh;
`;

const ThankYou: FC = () => {
  return (
    <PageWrapper>
      <ImageContainer>
        <Logo />
      </ImageContainer>
      <Text>Parabens, voce acabou de aquirir um incrivel perfume!</Text>
      <Text>
        A Natura e o Planeta agradecem pelo lixo que voce deixou de gerar.
      </Text>
      <ButtonContainer>
        <NavigationButton url='/' label='Encerrar' shouldShowIcon={false} />
      </ButtonContainer>
      <ContainerDevelopedBy>
        Uma solução:
        <DevelopedBy />
      </ContainerDevelopedBy>
    </PageWrapper>
  );
};

export default ThankYou;
