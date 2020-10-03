import React, { FC } from 'react';
import styled from 'styled-components';
import Price from '../../../components/checkout/Price';
import ProductReminder from '../../../components/checkout/ProductReminder';

const PriceContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PriceDescription = styled.div`
  margin-top: 5px;
  margin-right: 5px;
`;

interface IProps {
  price: number;
}

const Info: FC<IProps> = ({ price }: IProps) => {
  return (
    <>
      <ProductReminder />
      <PriceContainer>
        <PriceDescription>Total à vista:</PriceDescription>
        <Price value={price || 0} />
      </PriceContainer>
    </>
  );
};

export default Info;
