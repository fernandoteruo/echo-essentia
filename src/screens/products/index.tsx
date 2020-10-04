import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/order/Stepper';
import Actions from '../../components/order/Actions';
import useGetProducts from './hooks/useProducts';
import ListProducts from './components/ListProducts';
import { IRootReducer } from '../../store';
import { IProduct } from '../../model/order';

export const Container = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Products: FC = () => {
  const products = useGetProducts('');
  const selectedProduct = useSelector<IRootReducer, IProduct | null>(
    (state) => state.order.product,
  );

  return (
    <Container>
      <Stepper activeStep={Steps.PRODUCT} />
      <ListProducts products={products} />
      <Actions
        urlReturn='/'
        urlNext='/volumes'
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={selectedProduct === null}
      />
    </Container>
  );
};

export default Products;
