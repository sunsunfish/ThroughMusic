import Axios, { AxiosInstance } from 'axios';
import { createContext, useContext } from 'react';

declare module 'axios' {
  export interface AxiosRequestConfig {
    retry?: number;
    retryDelay?: number;
  }
}

const axios = Axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  retry: 5,
  retryDelay: 1000,
});

axios.interceptors.response.use(undefined, (error) => {
  const config = error.config;
  // skip retry for failed requests from the cache
  if (!config || config.retry) return Promise.reject(error);

  // set retry count
  config.__retryCount = config.__retryCount || 0;

  // over retry limit
  if (config.__retryCount >= config.retry) {
    // return error and auto retry
    return Promise.reject(error);
  }

  config.__retryCount += 1;

  const backoff = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, config.retryDelay || 1000);
  });

  // return retry
  return backoff.then(function () {
    return axios(config);
  });
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
