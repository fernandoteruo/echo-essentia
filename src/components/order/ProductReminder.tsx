import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../globals/styles';
import { IRootReducer } from '../../store';
import { IProduct, IVolume } from '../../model/order';

const ProductImage = styled.img`
  width: 60%;
`;

const Details = styled.div`
  font-size: 16px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Product = styled.div`
  margin-right: 10px;
`;

const Volume = styled.div`
  margin-left: 10px;
`;

const ProductReminder: FC = () => {
  const selectedProduct = useSelector<IRootReducer, IProduct | null>(
    (state) => state.order.product,
  );
  const selectedVolume = useSelector<IRootReducer, IVolume | null>(
    (state) => state.order.volume,
  );

  return (
    <PageWrapper>
      <ProductImage
        src={selectedProduct?.imageUrl}
        alt={selectedProduct?.name}
      />
      <Details>
        <Product>{selectedProduct?.name}</Product>
        {selectedVolume !== null ? (
          <Volume>{`${selectedVolume?.amount} ml`}</Volume>
        ) : null}
      </Details>
    </PageWrapper>
  );
};

export default ProductReminder;
