import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import useGetAvailableVolumes from './hooks/useVolume';
import Actions from '../../components/checkout/Actions';
import { IVolume } from './api/volume';
import ListVolume from './components/listVolume';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

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
      <Container>
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
      </Container>
    </PageWrapper>
  );
};

export default Volume;
