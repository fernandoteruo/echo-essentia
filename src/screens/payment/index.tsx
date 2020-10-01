import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Actions from '../../components/checkout/Actions';

interface IPaymentUrlParams {
  productId: string;
  volumeId: string;
}

const Payment: FC = () => {
  const { productId, volumeId } = useParams<IPaymentUrlParams>();
  const [isNextDisabled] = useState(true);

  return (
    <PageWrapper>
      <Stepper activeStep={Steps.PAYMENT} />

      <Actions
        urlReturn={`/products/${productId}/volume`}
        urlNext={`/products/${productId}/volume/${volumeId}/filling`}
        labelNext='Próximo'
        labelReturn='Voltar'
        isDisabled={isNextDisabled}
      />
    </PageWrapper>
  );
};

export default Payment;
