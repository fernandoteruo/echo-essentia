import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import useVolume from './hooks/useVolume';
import Actions from '../../components/checkout/Actions';
import ListVolume from './components/ListVolume';
import AppBar from '../../components/checkout/AppBar';
import ProductReminder from '../../components/checkout/ProductReminder';

const Volume: FC = () => {
  const { volumes, selectedVolume } = useVolume('');

  return (
    <PageWrapper>
      <AppBar />
      <Stepper activeStep={Steps.VOLUME} />
      <ProductReminder />
      <ListVolume volumes={volumes} />
      <Actions
        urlReturn='/products'
        urlNext='/payment'
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={selectedVolume === null}
      />
    </PageWrapper>
  );
};

export default Volume;
