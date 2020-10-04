import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../../components/order/Logo';
import NavigationButton from '../../components/navigation/NavigationButton';
import DevelopedBy from '../../components/order/DevelopedBy';
import { reset } from '../../store/order/actions';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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
