import React, { FC } from 'react';
import styled from 'styled-components';
import {
  CircularProgress as MuiCircularProgress,
  Dialog,
} from '@material-ui/core';

const LoadingContainer = styled(Dialog)`
  .MuiPaper-root {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const CircularProgress = styled(MuiCircularProgress)`
  background-color: transparent !important;

  &.MuiCircularProgress-colorPrimary {
    color: ${(props) => props.theme.colors.primary};
    background-color: transparent !important;
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
