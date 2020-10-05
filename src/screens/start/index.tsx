import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PageWrapper } from '../../components/globals/styles';
import Logo from '../../components/order/Logo';
import DevelopedBy from '../../components/order/DevelopedBy';
import { create, reset } from '../../store/order/actions';
import { PrimaryButton } from '../../components/form/Button';
import { kioskId } from '../../config';

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
  const history = useHistory();

  const handleStart = () => {
    dispatch(create({ id: 'orderId', number: 0, kioskId: kioskId || '' }));
    history.push('/products');
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <PageWrapper>
      <Container>
        <Logo />
      </Container>
      <Container>
        <PrimaryButton onClick={handleStart}>Iniciar</PrimaryButton>
      </Container>
      <ContainerDevelopedBy>
        Uma solução:
        <DevelopedBy />
      </ContainerDevelopedBy>
    </PageWrapper>
  );
};

export default Start;
