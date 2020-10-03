import axios, { AxiosRequestConfig } from 'axios';
import { apiUrl, apiKey } from '../config';

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    apiKey: apiKey,
  },
};

const api = axios.create(config);

export default api;
