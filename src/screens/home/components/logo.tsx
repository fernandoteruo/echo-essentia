import styled from 'styled-components';
import React, { FC } from 'react';
import logo from '../../../resources/svg/logoVertical.svg';

const StyledImage = styled.img`
  width: 50%;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

const Logo: FC = () => {
  return <StyledImage src={logo} />;
};

export default Logo;
