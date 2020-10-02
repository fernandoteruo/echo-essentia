import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: ${(props) => props.theme.colors.white} !important;
  width: 40% !important;
  box-shadow: none !important;
  transition: opacity 500ms ease-out;

  :disabled {
    opacity: 0.7;
  }
`;

export default StyledButton;
