import React, { FC } from 'react';
import styled from 'styled-components';
import clientPB from '../../resources/svg/natura/logoPB.svg';
import iconPB from '../../resources/svg/echoEssentia/iconPB.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 35px;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    width: 45px;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    width: 55px;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
    width: 65px;
  }
`;

const AppBar: FC = () => {
  return (
    <Container>
      <StyledImage src={clientPB} />
      <StyledImage src={iconPB} />
    </Container>
  );
};

export default AppBar;
