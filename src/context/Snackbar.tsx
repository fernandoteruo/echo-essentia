import React, { createContext, FC, useState } from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export enum Severity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

interface IContext {
  setSeverity: (severity: Severity) => void;
  setDuration: (duration: number) => void;
  setMessage: (message: string) => void;
}

const SnackbarContext = createContext<IContext | null>(null);

const SnackbarWrapper: FC = () => {
  const [severity, setSeverity] = useState<Severity>(Severity.ERROR);
  const [message, setMessage] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const context = {
    setSeverity,
    setDuration,
    setIsVisible,
    setMessage,
  };

  return (
    <SnackbarContext.Provider value={context}>
      <MuiSnackbar open={isVisible} autoHideDuration={duration}>
        <Alert severity={severity}>{message}</Alert>
      </MuiSnackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarWrapper;
