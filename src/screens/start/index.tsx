import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../../components/checkout/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';
import DevelopedBy from '../../components/checkout/DevelopedBy';

const Container = styled.div`
  height: 45vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ContainerDevelopedBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
`;

const Start: FC = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default Start;
