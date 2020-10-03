import React, { FC, useState } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import useGetAvailableVolumes from './hooks/useVolume';
import Actions from '../../components/checkout/Actions';
import ListVolume from './components/ListVolume';
import AppBar from '../../components/checkout/AppBar';
import { IVolume } from '../../context/Checkout';

const Volume: FC = () => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [selectedVolume, setSelectedVolume] = useState<IVolume | null>(null);
  const availableVolumes = useGetAvailableVolumes('');

  const handleSelection = (volume: IVolume) => {
    setSelectedVolume(volume?.id === selectedVolume?.id ? null : volume);
    setIsNextDisabled(volume?.id === selectedVolume?.id);
  };

  return (
    <PageWrapper>
      <AppBar />
      <Stepper activeStep={Steps.VOLUME} />
      <ListVolume
        volumes={availableVolumes}
        selectedVolume={selectedVolume}
        onSelection={handleSelection}
      />
      <Actions
        urlReturn='/products'
        urlNext='/products/product/volume/volume/payment'
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={isNextDisabled}
      />
    </PageWrapper>
  );
};

export default Volume;
