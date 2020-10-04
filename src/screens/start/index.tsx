import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../../components/order/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';
import DevelopedBy from '../../components/order/DevelopedBy';
import { OrderContext } from '../../context/Order';

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
  const order = useContext(OrderContext);

  useEffect(() => {
    order?.reset();
  }, [order]);

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
