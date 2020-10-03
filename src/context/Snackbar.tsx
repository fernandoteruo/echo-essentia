import React, { createContext, FC, useCallback, useState } from 'react';
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
  severity: (severity: Severity) => void;
  duration: (duration: number) => void;
  message: (message: string) => void;
  visibility: (isVisible: boolean) => void;
}

export const SnackbarContext = createContext<IContext | null>(null);

const SnackbarWrapper: FC<IProps> = ({ children }: IProps) => {
  const [severity, setSeverity] = useState<Severity>(Severity.ERROR);
  const [message, setMessage] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const context: IContext = {
    severity: useCallback((value: Severity) => setSeverity(value), []),
    duration: useCallback((value: number) => setDuration(value), []),
    message: useCallback((value: string) => setMessage(value), []),
    visibility: useCallback((value: boolean) => setIsVisible(value), []),
  };

  return (
    <SnackbarContext.Provider value={context}>
      {children}
      <MuiSnackbar open={isVisible} autoHideDuration={duration}>
        <Alert severity={severity} elevation={6} variant='filled'>
          {message}
        </Alert>
      </MuiSnackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarWrapper;
