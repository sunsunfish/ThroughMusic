import { createContext, useContext } from 'react';
import { UseQueryOptions, useQuery } from 'react-query';

import Axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { IResult } from './types';

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

axios.interceptors.response.use(
  (response) => {
    const data = response.data;
    // console.log('response:', response);
    if (response.status === 200) {
      return data;
    }
    return Promise.reject(new Error(response.statusText || 'Error'));
  },
  (error) => {
    const config = error.config;
    // skip retry for failed requests from the cache
    if (!config || !config.retry) return Promise.reject(error);

    // set retry count
    config.__retryCount = config.__retryCount || 0;

    // over retry limit
    // return error and auto retry
    if (config.__retryCount >= config.retry) return Promise.reject(error);

    config.__retryCount += 1;

    const backoff = new Promise<void>((resolve) => setTimeout(resolve, config.retryDelay || 1000));

    // return retry
    return backoff.then(() => axios(config));
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

type TRequestResult<T> = (IResult & T) | null;
export const useRequest = <P, R, C>({
  url,
  params,
  config,
  key,
  options,
}: {
  url: string;
  params: P;
  config?: C;
  key: string;
  options?: Omit<UseQueryOptions<TRequestResult<R>>, 'queryKey' | 'queryFn'>;
}) => {
  const axios = useAxios();
  const service = async () => {
    let data: TRequestResult<R> = null;
    try {
      data = await axios.get(url, {
        params,
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
        ...config,
      });
    } catch (_) {
      return null;
    }
    return data;
  };
  return useQuery<TRequestResult<R>, unknown>(key, service, options);
};

export default axios;
