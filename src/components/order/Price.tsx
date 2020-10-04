import React, { FC } from 'react';
import styled from 'styled-components';
import useCurrencyMasked from '../../hooks/formatter';

interface IProps {
  value: number;
}

const StyledPrice = styled.div`
  color: ${(props) => props.theme.colors.primary} !important;
  font-size: 18px;
  margin-top: 5px;
  font-weight: 700;
`;

const Price: FC<IProps> = ({ value }: IProps) => {
  const masked = useCurrencyMasked(value);

  return <StyledPrice>{masked}</StyledPrice>;
};

export default Price;
