import { anonymousApi } from '../../../api';

interface IData {
  email: string;
  password: string;
}

interface IResponse {
  access_token: string;
  token_type: string;
  session_state: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  scope: string;
}

const login: (data: IData) => Promise<IResponse> = async (data: IData) => {
  return anonymousApi.post<IData, IResponse>('/auth', data);
};

export default login;
