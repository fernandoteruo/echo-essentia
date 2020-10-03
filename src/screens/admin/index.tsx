import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';
import { PrimaryButton } from '../../components/form/Button';
import useLogin from './hooks/useLogin';
import ModalLoading from '../../components/feedback/ModalLoading';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%; ;
`;

const Input = styled(TextField)`
  margin-top: 15px !important;
  margin-bottom: 15px !important;
`;

const LoginButton = styled(PrimaryButton)`
  width: 160px; ;
`;

const Admin: FC = () => {
  const login = useLogin();

  return (
    <PageWrapper>
      {login.isLoading ? <ModalLoading /> : null}
      <Form noValidate autoComplete='off' onSubmit={login.onSubmit}>
        <Input
          id={login.emailInput.id}
          label={login.emailInput.label}
          value={login.emailInput.value}
          onChange={login.onChange}
        />
        <Input
          id={login.passwordInput.id}
          label={login.passwordInput.label}
          value={login.passwordInput.value}
          onChange={login.onChange}
        />
        <LoginButton>Login</LoginButton>
      </Form>
    </PageWrapper>
  );
};

export default Admin;
