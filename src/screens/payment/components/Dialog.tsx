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

interface IProps {
  onClose: (shouldRedirect: boolean) => void;
}

const PAYMENT_INSTRUCTIONS = [
  'Insira seu cartao na maquina abaixo',
  'Siga as instrucoes para inserir a senha',
  'Aguarde a confirmacao do pagamento',
];

const Container = styled(Dialog)`
  .MuiDialog-paper {
    align-items: center;
  }
`;

const Title = styled(DialogTitle)`
  .MuiTypography-h6 {
    font-weight: 700 !important;
    font-family: 'Open Sans';
  }
`;

const Text = styled(ListItemText)`
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
        {PAYMENT_INSTRUCTIONS.map((instruction) => {
          return (
            <ListItem key={instruction}>
              <Text primary={instruction} />
            </ListItem>
          );
        })}
      </List>
      <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
    </Container>
  );
};

export default PaymentDialog;
