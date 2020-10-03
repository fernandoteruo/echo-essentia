import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';
import {
  CreditCard,
  Dialpad,
  SvgIconComponent,
  Timer,
} from '@material-ui/icons';

interface IProps {
  onClose: (isPaymentSuccessful: boolean) => void;
}

interface IPaymentInstruction {
  label: string;
  Icon: SvgIconComponent;
}

const PAYMENT_INSTRUCTIONS: IPaymentInstruction[] = [
  {
    label: 'Insira seu cartão na máquina abaixo',
    Icon: CreditCard,
  },
  {
    label: 'Siga as instruções para inserir a senha',
    Icon: Dialpad,
  },
  {
    label: 'Aguarde a confirmação do pagamento',
    Icon: Timer,
  },
];

const Container = styled(Dialog)`
  .MuiDialog-paper {
    align-items: center;

    @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
      padding: 35px;
    }
  }
`;

const Title = styled(DialogTitle)`
  .MuiTypography-h6 {
    font-weight: 700 !important;
    font-family: 'Open Sans';
  }
`;

const Text = styled(ListItemText)`
  margin-left: 15px;

  .MuiTypography-body1 {
    font-family: 'Open Sans';
  }
`;

const CancelButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white} !important;
  color: ${(props) => props.theme.colors.black} !important;
  border-color: ${(props) => props.theme.colors.black} !important;
  border-width: 1px !important;
  border-style: solid !important;
  box-shadow: none !important;
  width: 40% !important;
  margin-bottom: 20px !important;
`;

const PaymentDialog: FC<IProps> = ({ onClose }: IProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => onClose(true), 5000);

    return () => {
      clearTimeout();
    };
  });

  const handleCancel = () => {
    setIsOpen(false);
    onClose(false);
  };

  return (
    <Container open={isOpen} disableBackdropClick disableEscapeKeyDown>
      <Title>Efetue o pagamento</Title>
      <List>
        {PAYMENT_INSTRUCTIONS.map(({ label, Icon }) => {
          return (
            <ListItem key={label}>
              <Icon />
              <Text primary={label} />
            </ListItem>
          );
        })}
      </List>
      <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
    </Container>
  );
};

export default PaymentDialog;
