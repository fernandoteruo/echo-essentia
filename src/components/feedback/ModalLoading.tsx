import React, { FC } from 'react';
import styled from 'styled-components';
import {
  CircularProgress as MuiCircularProgress,
  Dialog,
} from '@material-ui/core';
import { WithTheme } from '../../themes';

const LoadingContainer = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent !important;
    box-shadow: none !important;
    overflow: hidden;
  }
`;

const CircularProgress = styled(MuiCircularProgress)<WithTheme>`
  background-color: transparent !important;

  &.MuiCircularProgress-colorPrimary {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ModalLoading: FC = () => {
  return (
    <LoadingContainer open disableEscapeKeyDown disableBackdropClick>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default ModalLoading;
