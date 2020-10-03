import { ChangeEvent, FormEvent, useState } from 'react';
import login from '../api/login';

interface IUseLogin {
  emailInput: IInput;
  passwordInput: IInput;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

interface IInput {
  label: string;
  id: string;
  value: string;
}

const useLogin: () => IUseLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const auth = await login({ email, password });
      localStorage.setItem('userToken', auth.access_token);
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    if (id === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return {
    emailInput: {
      id: 'email',
      label: 'E-mail',
      value: email,
    },
    passwordInput: {
      id: 'password',
      label: 'Password',
      value: password,
    },
    onSubmit,
    onChange,
    isLoading,
  };
};

export default useLogin;
