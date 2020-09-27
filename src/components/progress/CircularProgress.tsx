import styled from 'styled-components';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';

const CircularProgress = styled(MuiCircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default CircularProgress;
