import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/order/Stepper';
import Actions from '../../components/order/Actions';
import useGetProducts from './hooks/useProducts';
import ListProducts from './components/ListProducts';

export const Container = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
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

const Products: FC = () => {
  const { products, selectedProduct } = useGetProducts('');

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
