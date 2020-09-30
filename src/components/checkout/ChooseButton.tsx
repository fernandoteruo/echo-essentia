import styled from 'styled-components';
import { WithTheme } from '../../themes';

interface IChooseButtonProps extends WithTheme {
  isSelected: boolean;
}

const ChooseButton = styled.div<IChooseButtonProps>`
  margin-top: auto;
  text-align: center;
  padding: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: border color 500ms ease-out;
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary
      : props.theme.colors.black} !important;
  border: 1px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.primary
        : props.theme.colors.black} !important;
`;

export default ChooseButton;
