import React, { createContext, FC, useState } from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import { WithTheme } from '../themes';

export enum Severity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

const Alert = styled(MuiAlert)<WithTheme>`
  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    padding: 10px 20px !important;
    font-size: 1em !important;
  }
`;

interface IProps {
  children: any;
}

interface IContext {
  setSeverity: (severity: Severity) => void;
  setDuration: (duration: number) => void;
  setMessage: (message: string) => void;
  setIsVisible: (isVisible: boolean) => void;
}

export const SnackbarContext = createContext<IContext | null>(null);

const SnackbarWrapper: FC<IProps> = ({ children }: IProps) => {
  const [severity, setSeverity] = useState<Severity>(Severity.ERROR);
  const [message, setMessage] = useState<string | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setMessage(null);
  };

  const context: IContext = {
    setSeverity,
    setDuration,
    setMessage,
    setIsVisible,
  };

  return (
    <SnackbarContext.Provider value={context}>
      {children}
      <MuiSnackbar
        open={isVisible}
        autoHideDuration={duration}
        onClose={handleClose}
      >
        <Alert severity={severity} elevation={6} variant='filled'>
          {message}
        </Alert>
      </MuiSnackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarWrapper;
