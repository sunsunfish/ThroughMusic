import { useRequest } from './request';
import { IUserAccount } from './types';

// 手机登录
const useLoginCellphone = (phone: string, password: string) =>
  useRequest<
    { phone: string; password: string },
    {
      token: string;
      account: IUserAccount;
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
    },
  });

export { useLoginCellphone };
