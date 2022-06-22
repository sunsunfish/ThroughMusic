import { createContext, useContext } from 'react';
import { UseQueryOptions, useQuery } from 'react-query';

import Axios, { AxiosInstance } from 'axios';
import qs from 'qs';

import { IResult } from './types';

const axios = Axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
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

type TRequestResult<T> = (IResult & T) | null;
export const useRequest = <P, R, C = unknown>({
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

  return useQuery<TRequestResult<R>, unknown>(key, service, {
    retry: 5,
    ...options,
  });
};

export default axios;
