import React, { FC } from 'react';
import { PageWrapper } from '../../components/globals/styles';
import CheckoutStepper, {
  Steps,
} from '../../components/navigation/CheckoutStepper';

const Products: FC = () => {
  return (
    <PageWrapper>
      <CheckoutStepper activeStep={Steps.PRODUCT} />
    </PageWrapper>
  );
};

export default Products;
