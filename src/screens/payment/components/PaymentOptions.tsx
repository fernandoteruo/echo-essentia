import React, { FC, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio as MuiRadio,
  RadioGroup,
} from '@material-ui/core';
import styled from 'styled-components';
import { PaymentType } from '../api/payment';
import { usePaymentTypeLabel } from '../hooks/usePayment';
import { WithTheme } from '../../../themes';

interface IProps {
  price: number;
}

interface IInput extends WithTheme {
  isSelected: boolean;
}

const Container = styled.div`
  padding: 10px;
`;

const ChoosePaymentType = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled(FormControlLabel)<IInput>`
  color: ${(props) =>
    props.isSelected ? props.theme.colors.primary : ''} !important;
`;

const Radio = styled(MuiRadio)<WithTheme>`
  &.Mui-checked {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

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
      <FormControl>
        <RadioGroup
          aria-label='paymentType'
          name='paymentType'
          value={paymentType}
          onChange={handleChange}
        >
          <Input
            value={PaymentType.DEBIT}
            control={<Radio />}
            label={labels.DEBIT}
            isSelected={paymentType === PaymentType.DEBIT}
          />
          <Input
            value={PaymentType.CREDIT}
            control={<Radio />}
            label={labels.CREDIT}
            isSelected={paymentType === PaymentType.CREDIT}
          />
          <Input
            value={PaymentType.CREDIT_INSTALLS_2}
            control={<Radio />}
            label={labels.CREDIT_INSTALLS_2}
            isSelected={paymentType === PaymentType.CREDIT_INSTALLS_2}
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default PaymentOptions;
