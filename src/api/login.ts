import { useRequest } from './request';

export interface IProfile {
  avatarUrl: string;
}
export interface IUserAccount {
  userName: string; // 用户姓名
}

export interface ILoginParams {
  phone: string;
  password: string;
}

export interface ILoginRes {
  token: string;
  account: IUserAccount;
  profile: IProfile;
}

// 手机登录
const useLoginCellphone = (ps: ILoginParams, options: Record<string, unknown>) =>
  useRequest<{ phone: string; password: string }, ILoginRes, unknown>({
    url: '/login/cellphone',
    params: {
      phone: ps.phone,
      password: ps.password,
    },
    key: `loginCellphone-${ps.phone}`,
    options: {
      enabled: false,
      suspense: false,
      ...options,
    },
  });

// 登出
const useLogout = (token: string, options: Record<string, unknown>) =>
  useRequest<{ token: string }, { code: number }, unknown>({
    url: '/logout',
    params: {
      token,
    },
    key: `logout`,
    options: {
      enabled: false,
      suspense: false,
      ...options,
    },
  });

export { useLoginCellphone, useLogout };
