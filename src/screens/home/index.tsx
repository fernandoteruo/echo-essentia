import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

const Home: FC = () => {
  return (
    <PageWrapper>
      <Image src='' />
    </PageWrapper>
  );
};

export default Home;
