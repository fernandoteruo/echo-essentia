import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fillRecipient, writeRFID } from '../api/filling';
import { Severity, SnackbarContext } from '../../../context/Snackbar';
import { deviceId } from '../../../config';
import { complete } from '../../../store/order/actions';

interface IFilling {
  isLoading: boolean;
  tryFill: () => void;
}

const useFilling: () => IFilling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const snackbar = useContext(SnackbarContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const tryFill = async () => {
    setIsLoading(true);
    try {
      const data = {
        method: 'method',
        name: 'Command Test',
        payloads: {
          Status: true,
        },
      };
      await fillRecipient(`${deviceId}`, data);
      await writeRFID();
      setIsLoading(false);
      history.push('thank-you');
      dispatch(complete());
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      snackbar?.setSeverity(Severity.ERROR);
      snackbar?.setMessage('Erro ao tentar recarregar');
      snackbar?.setIsVisible(true);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  });

  return {
    isLoading,
    tryFill,
  };
};

export default useFilling;
