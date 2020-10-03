import React, { FC } from 'react';
import styled from 'styled-components';
import { IPayment } from '../api/payment';
import Price from '../../../components/checkout/Price';
import ProductReminder from '../../../components/checkout/ProductReminder';

interface IProps {
  payment: IPayment | null;
}

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

const Info: FC<IProps> = ({ payment }: IProps) => {
  return (
    <>
      <ProductReminder
        productImage={payment?.productImage || ''}
        productName={payment?.productName || ''}
        volumeName={payment?.volumeName || ''}
      />
      <PriceContainer>
        <PriceDescription>Total à vista:</PriceDescription>
        <Price value={payment?.price || 0} />
      </PriceContainer>
    </>
  );
};

export default Info;
