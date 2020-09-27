import styled from 'styled-components';
import { LinearProgress as MuiLinearProgress } from '@material-ui/core';

const LinearProgress = styled(MuiLinearProgress)`
  background-color: ${({ theme: { colors } }) => colors.primary} !important;

  .MuiLinearProgress-barColorPrimary {
    background-color: ${({ theme: { colors } }) => colors.primaryOpacity75};
  }
`;

export default LinearProgress;
