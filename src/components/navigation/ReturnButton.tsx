import React, { FC } from 'react';
import styled from 'styled-components';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import Button, { Icon, Label } from '../form/Button';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white} !important;
  color: ${(props) => props.theme.colors.black} !important;
  border: 1px solid ${(props) => props.theme.colors.black} !important;
`;

interface IProps {
  url?: string;
  label: string;
}

const ReturnButton: FC<IProps> = ({ label, url }: IProps) => {
  const history = useHistory();

  const navigateReturn = () => {
    if (url) {
      history.push(url);
    } else {
      history.goBack();
    }
  };

  return (
    <StyledButton onClick={navigateReturn}>
      <Icon>
        <ArrowBack />
      </Icon>
      <Label>{label}</Label>
    </StyledButton>
  );
};

export default ReturnButton;
