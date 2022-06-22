import { useRequest } from './request';

export interface IProfile {
  avatarUrl: string;
}
export interface IUserAccount {
  userName: string; // 用户姓名
}

interface ILoginPs {
  phone: string;
  password: string;
}

// 手机登录
const useLoginCellphone = (ps: ILoginPs) =>
  useRequest<
    { phone: string; password: string },
    {
      token: string;
      account: IUserAccount;
      profile: IProfile;
    },
    unknown
  >({
    url: '/login/cellphone',
    params: {
      phone: ps.phone,
      password: ps.password,
    },
    key: `loginCellphone-${ps.phone}`,
    options: {
      enabled: false,
      suspense: false,
    },
  });

// 登出
const useLogout = (token: string) =>
  useRequest<{ token: string }, { code: number }, unknown>({
    url: '/logout',
    params: {
      token,
    },
    key: `logout`,
    options: {
      enabled: false,
      suspense: false,
    },
  });

export { useLoginCellphone, useLogout };
