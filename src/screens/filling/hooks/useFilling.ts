import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fillRecipient from '../api/filling';

interface IFilling {
  isLoading: boolean;
  tryFill: () => void;
}

const useFilling: () => IFilling = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      const response = await fillRecipient(
        'a6aef30e-2145-41af-8100-79259bad0b59',
        data,
      );
      console.log(response);
      setIsLoading(true);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
    history.push('thank-you');
  };

  return {
    isLoading,
    tryFill,
  };
};

export default useFilling;
