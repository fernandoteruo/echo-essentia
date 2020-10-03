import styled from 'styled-components';
import React, { FC } from 'react';
import logo from '../../../resources/svg/natura/logo.svg';

const StyledImage = styled.img`
  width: 50%;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    width: 35%;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    width: 25%;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
    width: 20%;
  }
`;

const Logo: FC = () => {
  return <StyledImage src={logo} />;
};

export default Logo;
