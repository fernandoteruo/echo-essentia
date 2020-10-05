import React, { FC } from 'react';
import styled from 'styled-components';
import { Dialog, DialogTitle } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { IProduct } from '../../../model/order';

interface IProps {
  onClose: () => void;
  product: IProduct | null;
}

const InfoContainer = styled(Dialog)`
  box-shadow: none !important;
  overflow: hidden;
  padding: 20px;
  font-family: Open Sans !important;
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(DialogTitle)`
  text-align: center;
  font-family: Open Sans !important;
`;

const IconContainer = styled.div`
  padding: 10px;
  width: 50px;
`;

const Close = styled(CloseIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const InfoDescription = styled.div`
  padding: 30px;
  text-align: center;
  font-family: Open Sans !important;
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

const Description: FC<IProps> = ({ onClose, product }: IProps) => {
  return (
    <InfoContainer open onClose={onClose}>
      <TitleContainer>
        <IconContainer />
        <Title>{product?.name}</Title>
        <IconContainer>
          <Close onClick={onClose} />
        </IconContainer>
      </TitleContainer>
      <ImageContainer>
        <ProductImage src={product?.imageUrl} alt={product?.name} />
      </ImageContainer>
      <InfoDescription>{product?.description}</InfoDescription>
    </InfoContainer>
  );
};

export default Description;
