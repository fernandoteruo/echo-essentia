import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../globals/styles';
import { OrderContext } from '../../context/Order';

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
  const order = useContext(OrderContext);

  return (
    <PageWrapper>
      <ProductImage src={order?.product?.imageUrl} alt={order?.product?.name} />
      <Details>
        <Product>{order?.product?.name}</Product>
        {order?.volume !== null ? (
          <Volume>{`${order?.volume?.amount} ml`}</Volume>
        ) : null}
      </Details>
    </PageWrapper>
  );
};

export default ProductReminder;
