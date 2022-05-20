import Axios, { AxiosInstance } from 'axios';
import { createContext, useContext } from 'react';

const axios = Axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    const data = response.data;
    console.log('response:', response);
    if (response.status === 200) {
      return data;
    }
    return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
    console.log('error:', error);
    return Promise.reject(new Error(error.statusText || 'Error'));
  },
);
export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(axios, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider');
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider');
    },
  }),
);

export const useAxios = () => {
  return useContext(AxiosContext);
};

export default axios;
