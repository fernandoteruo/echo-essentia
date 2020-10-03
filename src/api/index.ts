import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiUrl, tenant, userToken } from '../config';

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${userToken}`,
    'X-Tenant': tenant,
    'Content-Type': 'application/json',
  },
};

const api = axios.create(config);

const responseInterceptor = (response: AxiosResponse) => {
  return response.data;
};

const errorInterceptor = (error: any) => {
  const {
    response: { statusText },
  } = error;
  throw new Error(statusText);
};

api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
