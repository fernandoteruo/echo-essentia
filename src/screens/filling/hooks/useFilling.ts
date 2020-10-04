import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fillRecipient from '../api/filling';
import { Severity, SnackbarContext } from '../../../context/Snackbar';
import { deviceId } from '../../../config';

interface IFilling {
  isLoading: boolean;
  tryFill: () => void;
}

const FILLING_DURATION = 5000;

const useFilling: () => IFilling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const snackbar = useContext(SnackbarContext);
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
      setTimeout(() => {
        setIsLoading(false);
        history.push('thank-you');
      }, FILLING_DURATION);
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
