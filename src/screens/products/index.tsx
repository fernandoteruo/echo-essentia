import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Actions from '../../components/checkout/Actions';
import useGetProducts from './hooks/useProducts';
import ListProducts from './components/ListProducts';
import { IProduct } from './api/products';

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
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const products = useGetProducts('');

  const handleSelection = (product: IProduct) => {
    setSelectedProduct(product?.id === selectedProduct?.id ? null : product);
    setIsNextDisabled(product?.id === selectedProduct?.id);
  };

  return (
    <Container>
      <Stepper activeStep={Steps.PRODUCT} />
      <ListProducts
        products={products}
        selectedProduct={selectedProduct}
        onSelection={handleSelection}
      />
      <Actions
        urlReturn='/'
        urlNext={`/products/${selectedProduct?.id}/volume`}
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={isNextDisabled}
      />
    </Container>
  );
};

export default Products;
