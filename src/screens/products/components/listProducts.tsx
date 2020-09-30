import React, { FC } from 'react';
import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import { IProduct } from '../api/products';
import { WithTheme } from '../../../themes';
import Price from '../../../components/checkout/Price';

interface IProps {
  products: IProduct[];
  selectedProduct?: IProduct | null;
  onSelection: (product: IProduct) => void;
}

const ProductsList = styled(List)``;

const Product = styled(ListItem)<WithTheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.cards.border} !important;
  background-color: ${(props) => props.theme.cards.backgroundColor} !important;
  padding: 30px !important;
  width: 250px !important;
  height: 475px !important;
  margin-top: 20px !important;
  transition: border 500ms ease-out;

  &.Mui-selected {
    border-color: ${(props) => props.theme.colors.primary} !important;
  }
`;

const ProductImage = styled.img`
  height: 180px;
`;

const ProductCategory = styled.div`
  color: ${(props) => props.theme.cards.categoryColor} !important;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.cards.titleColor} !important;
  font-size: '18px';
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const ProductDescription = styled.div`
  color: #636363;
  margin-top: 20px;
  font-size: 12px;
  width: 90%;
  text-align: center;
`;

const ProductPrice = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 11px;
`;

interface IChooseButtonProps extends WithTheme {
  isSelected: boolean;
}

const ChooseButton = styled.div<IChooseButtonProps>`
  margin-top: auto;
  text-align: center;
  padding: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: border color 500ms ease-out;
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary
      : props.theme.colors.black} !important;
  border: 1px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.primary
        : props.theme.colors.black} !important;
`;

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
      {products.map((product) => {
        const isSelected = product.id === selectedProduct?.id;
        return (
          <Product
            button
            onClick={handleClick(product)}
            key={product.id}
            selected={isSelected}
          >
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductCategory>{product.category}</ProductCategory>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>
              A partir de
              <Price value={product.price} />
            </ProductPrice>
            <ChooseButton isSelected={isSelected}>
              {isSelected ? 'Selecionado' : 'Selectionar'}
            </ChooseButton>
          </Product>
        );
      })}
    </ProductsList>
  );
};

export default ListProducts;
