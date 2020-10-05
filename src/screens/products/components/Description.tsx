import React, { FC } from 'react';
import styled from 'styled-components';
import { Dialog, DialogTitle } from '@material-ui/core';
import { IProduct } from '../../../model/order';

interface IProps {
  onClose: () => void;
  product: IProduct | null;
  isOpen: boolean;
}

const InfoContainer = styled(Dialog)`
  box-shadow: none !important;
  overflow: hidden;
  padding: 20px;
  font-family: Open Sans !important;
`;

const Title = styled(DialogTitle)`
  text-align: center;
`;

const InfoDescription = styled.div`
  padding: 30px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-height: 200px;
`;

const Description: FC<IProps> = ({ onClose, product, isOpen }: IProps) => {
  return (
    <InfoContainer open={isOpen} onClose={onClose}>
      <Title>{product?.name}</Title>
      <ImageContainer>
        <ProductImage src={product?.imageUrl} alt={product?.name} />
      </ImageContainer>
      <InfoDescription>{product?.description}</InfoDescription>
    </InfoContainer>
  );
};

export default Description;
