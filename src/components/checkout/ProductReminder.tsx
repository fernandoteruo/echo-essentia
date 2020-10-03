import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../globals/styles';

interface IProps {
  productName: string;
  productImage: string;
  volumeName?: string;
}

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

const ProductReminder: FC<IProps> = ({
  productImage,
  productName,
  volumeName,
}: IProps) => {
  return (
    <PageWrapper>
      <ProductImage src={productImage} alt={productName} />
      <Details>
        {productName} / {volumeName}
      </Details>
    </PageWrapper>
  );
};

export default ProductReminder;
