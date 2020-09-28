import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import logo from '../../resources/svg/icon.svg';

const Home: FC = () => {
  return (
    <PageWrapper>
      <div>
        <img src={logo} alt='Logo Echo Essentia' />
      </div>
    </PageWrapper>
  );
};

export default Home;
