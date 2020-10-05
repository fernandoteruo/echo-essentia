import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/order/Stepper';
import useVolume from './hooks/useVolume';
import Actions from '../../components/order/Actions';
import ListVolume from './components/ListVolume';
import ProductReminder from '../../components/order/ProductReminder';
import { IRootReducer } from '../../store';
import { IVolume } from '../../model/order';
import { kioskId } from '../../config';

const Volume: FC = () => {
  const volumes = useVolume(kioskId);
  const selectedVolume = useSelector<IRootReducer, IVolume | null>(
    (state) => state.order.volume,
  );

  return (
    <PageWrapper>
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
