import styled from 'styled-components';
import { ListItem } from '@material-ui/core';
import { WithTheme } from '../../themes';

export const Card = styled(ListItem)<WithTheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: #eaeaea !important;
  background-color: #ffffff !important;
  padding: 30px !important;
  width: 250px !important;
  margin-top: 20px !important;
  transition: border 500ms ease-out;

  &.Mui-selected {
    border-color: ${(props) => props.theme.colors.primary} !important;
  }
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
