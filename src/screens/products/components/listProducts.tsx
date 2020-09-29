import React, { FC } from 'react';
import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import { IProduct } from '../api/products';

interface IProps {
  products: IProduct[];
  selectedProduct?: IProduct | null;
  onSelection: (product: IProduct) => void;
}

const ProductsList = styled(List)``;

const Product = styled(ListItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${(props) =>
    props.selected ? 'green' : 'white'} !important;
`;

const ProductImage = styled.img`
  width: 40%;
`;
const ProductName = styled.div``;
const ProductDescription = styled.div``;

const ProductPrice = styled.div``;

const ChooseButton = styled.div``;

const ListProducts: FC<IProps> = ({
  products,
  selectedProduct,
  onSelection,
}: IProps) => {
  const handleClick = (product: IProduct) => () => {
    onSelection(product);
  };

  return (
    <ProductsList>
      {products.map((product) => (
        <Product
          button
          onClick={handleClick(product)}
          key={product.id}
          selected={product.id === selectedProduct?.id}
        >
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
          <ChooseButton>Escolher</ChooseButton>
        </Product>
      ))}
    </ProductsList>
  );
};

export default ListProducts;
