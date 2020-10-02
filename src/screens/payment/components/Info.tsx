import React, { FC } from 'react';
import styled from 'styled-components';
import { IPayment } from '../api/payment';
import { PageWrapper } from '../../../components/globals/styles';
import Price from '../../../components/checkout/Price';

interface IProps {
  payment: IPayment | null;
}

const ProductImage = styled.img`
  width: 100%;
`;

const Details = styled.div`
  font-size: 16px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

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
    <PageWrapper>
      <ProductImage src={payment?.productImage} alt={payment?.productName} />
      <Details>
        {payment?.productName} /{payment?.volumeName}
      </Details>
      <PriceContainer>
        <PriceDescription>Total à vista:</PriceDescription>
        <Price value={payment?.price || 0} />
      </PriceContainer>
    </PageWrapper>
  );
};

export default Info;
