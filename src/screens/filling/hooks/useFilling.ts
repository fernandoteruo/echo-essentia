import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fillRecipient from '../api/filling';
import { Severity, SnackbarContext } from '../../../context/Snackbar';

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
        method: 'ping',
        name: 'Ping',
        payloads: {
          Status: true,
        },
      };
      await fillRecipient('a6aef30e-2145-41af-8100-79259bad0b59', data);
      setTimeout(() => {
        setIsLoading(false);
        history.push('thank-you');
      }, FILLING_DURATION);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      snackbar?.severity(Severity.ERROR);
      snackbar?.message('Erro ao tentar recarregar');
      snackbar?.visibility(true);
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
