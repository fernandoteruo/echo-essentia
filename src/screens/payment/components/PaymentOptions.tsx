import React, { FC, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import styled from 'styled-components';
import { PaymentType } from '../api/payment';
import { usePaymentTypeLabel } from '../hooks/usePayment';

interface IProps {
  price: number;
}

const Container = styled.div``;

const ChoosePaymentType = styled.div``;

const PaymentOptions: FC<IProps> = ({ price }: IProps) => {
  const [paymentType, setPaymentType] = useState<string>(PaymentType.DEBIT);
  const labels = usePaymentTypeLabel(price);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPaymentType(value);
  };

  return (
    <Container>
      <ChoosePaymentType>Escolha forma de pagamento: </ChoosePaymentType>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={paymentType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={PaymentType.DEBIT}
            control={<Radio />}
            label={labels.DEBIT}
          />
          <FormControlLabel
            value={PaymentType.CREDIT}
            control={<Radio />}
            label={labels.CREDIT}
          />
          <FormControlLabel
            value={PaymentType.CREDIT_INSTALLS_2}
            control={<Radio />}
            label={labels.CREDIT_INSTALLS_2}
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default PaymentOptions;
