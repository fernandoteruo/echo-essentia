import React, { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MuiBackdrop from '@material-ui/core/Backdrop';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import Stepper, { Steps } from '../../components/checkout/Stepper';
import Info from './components/Info';
import Options from './components/Options';
import ReturnButton from '../../components/navigation/ReturnButton';
import { Container } from '../../components/checkout/Actions';
import PaymentDialog from './components/Dialog';
import { PrimaryButton } from '../../components/form/Button';
import { Severity, SnackbarContext } from '../../context/Snackbar';
import { OrderContext } from '../../context/Order';

const TIMEOUT_REDIRECT = 3000;

const Backdrop = styled(MuiBackdrop)`
  z-index: 1 !important;
`;

const Payment: FC = () => {
  const snackbar = useContext(SnackbarContext);
  const order = useContext(OrderContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [shouldShowPaymentDialog, setsShouldShowPaymentDialog] = useState(
    false,
  );
  const history = useHistory();

  const handleOpen = () => setsShouldShowPaymentDialog(true);

  const handleClose = (isPaymentSuccessful: boolean) => {
    setsShouldShowPaymentDialog(false);
    setIsDisabled(isPaymentSuccessful);
    const snackbarMessage = isPaymentSuccessful
      ? 'Pagamento efetuado com sucesso'
      : 'Erro ao efetuar pagamento';
    const snackbarSeverity = isPaymentSuccessful
      ? Severity.SUCCESS
      : Severity.ERROR;
    snackbar?.setMessage(snackbarMessage);
    snackbar?.setSeverity(snackbarSeverity);
    snackbar?.setDuration(TIMEOUT_REDIRECT);
    snackbar?.setIsVisible(true);

    if (isPaymentSuccessful) {
      setTimeout(() => {
        snackbar?.setIsVisible(false);
        history.push('/filling');
      }, TIMEOUT_REDIRECT);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  });

  return (
    <PageWrapper>
      <Backdrop open={isDisabled} />
      <Stepper activeStep={Steps.PAYMENT} />
      <Info price={order?.volume?.price || 0} />
      <Options price={order?.volume?.price || 0} />
      {shouldShowPaymentDialog ? <PaymentDialog onClose={handleClose} /> : null}
      <Container>
        <ReturnButton label='Voltar' url='/volumes' />
        <PrimaryButton onClick={handleOpen} disabled={isDisabled}>
          Pagar
        </PrimaryButton>
      </Container>
    </PageWrapper>
  );
};

export default Payment;
