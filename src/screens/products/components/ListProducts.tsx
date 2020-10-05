import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Price from '../../../components/order/Price';
import ChooseButton from '../../../components/order/ChooseButton';
import { Card, CardSection } from '../../../components/order/Card';
import List from '../../../components/order/List';
import { setProduct } from '../../../store/order/actions';
import { IProduct } from '../../../model/order';
import { IRootReducer } from '../../../store';
import Description from './Description';

interface IProps {
  products: IProduct[];
}

const Product = styled(Card)`
  height: 450px !important;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
`;

const InfoContainer = styled(CardSection)`
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-height: 200px;
`;

const ProductCategory = styled(CardSection)`
  color: #b4b4b4 !important;
  font-size: 12px;
  font-weight: 300;
  height: 20px;
`;

const ProductName = styled(CardSection)`
  font-size: 18px;
  font-weight: 600;
  height: 50px;
`;

const ProductPrice = styled(CardSection)`
  font-size: 11px;
  font-weight: 400;
  flex-direction: column;
  height: 60px;
`;

const ProductButton = styled(CardSection)`
  margin-top: 15px;
`;

const ValueFrom = styled(CardSection)``;

const ViewMoreContainer = styled(CardSection)`
  margin-top: 15px;
  font-weight: 300;
  font-size: 11px;
  z-index: 2;
`;

const ListProducts: FC<IProps> = ({ products }: IProps) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector<IRootReducer, IProduct | null>(
    (state) => state.order.product,
  );
  const [viewMore, setViewMore] = useState<IProduct | null>(null);
  const [cardSelection, setCardSelection] = useState<IProduct | null>(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleSelect = (product: IProduct) => () => {
    setCardSelection(product);
  };

  const handleViewMore = (product: IProduct) => () => {
    setViewMore(product);
  };

  const handleViewMoreClose = () => {
    setViewMore(null);
    setCardSelection(null);
    setIsDescriptionVisible(false);
  };

  useEffect(() => {
    if (cardSelection && viewMore === null) {
      dispatch(setProduct(cardSelection));
    } else if (cardSelection && viewMore) {
      setIsDescriptionVisible(true);
    }
    setCardSelection(null);
  }, [selectedProduct, cardSelection, viewMore, dispatch]);

  return (
    <>
      {isDescriptionVisible ? (
        <Description onClose={handleViewMoreClose} product={viewMore} />
      ) : null}
      <List>
        {products.map((product) => {
          const isSelected = product.id === selectedProduct?.id;
          return (
            <Product
              button
              onClick={handleSelect(product)}
              key={product.id}
              selected={isSelected}
            >
              <ProductImage src={product.imageUrl} alt={product.name} />
              <InfoContainer>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>
                  <ValueFrom>A partir de</ValueFrom>
                  <Price value={product.price} />
                </ProductPrice>
                <ProductButton>
                  <ChooseButton isSelected={isSelected}>
                    {isSelected ? 'Selecionado' : 'Selecionar'}
                  </ChooseButton>
                </ProductButton>
                <ViewMoreContainer onClick={handleViewMore(product)}>
                  View More
                </ViewMoreContainer>
              </InfoContainer>
            </Product>
          );
        })}
      </List>
    </>
  );
};

export default ListProducts;
