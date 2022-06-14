import { useRequest } from './request';

export interface IProfile {
  avatarUrl: string | undefined;
}
export interface IUserAccount {
  userName: string | undefined; // 用户姓名
}

// 手机登录
const useLoginCellphone = (phone: string, password: string) =>
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
      phone,
      password,
    },
    key: `loginCellphone-${phone}`,
    options: {
      enabled: false,
      suspense: false,
    },
  });

export { useLoginCellphone };
