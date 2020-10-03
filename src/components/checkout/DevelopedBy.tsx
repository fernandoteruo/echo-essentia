import styled from 'styled-components';
import React, { FC } from 'react';
import logo from '../../resources/svg/echoEssentia/echoEssentiaLogoHorizontal.svg';

const StyledImage = styled.img`
  width: 80px;
  margin-left: 20px;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

const DevelopedBy: FC = () => {
  return <StyledImage src={logo} />;
};

export default DevelopedBy;
