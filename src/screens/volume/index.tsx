import React, { FC, useState } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import useGetAvailableVolumes from './hooks/useVolume';
import Actions from '../../components/checkout/Actions';
import { IVolume } from './api/volume';
import ListVolume from './components/ListVolume';

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
      <Stepper activeStep={Steps.VOLUME} />
      <ListVolume
        volumes={availableVolumes}
        selectedVolume={selectedVolume}
        onSelection={handleSelection}
      />
      <Actions
        urlReturn='/products'
        urlNext={`/products/${selectedVolume?.productId}/volume/${selectedVolume?.id}/payment`}
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={isNextDisabled}
      />
    </PageWrapper>
  );
};

export default Volume;
