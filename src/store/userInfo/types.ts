import { IProfile, IUserAccount } from '@/api/login';

type IUserInfo = IProfile & IUserAccount & { token: string };

type Actions = {
  setUserInfo: (userInfo: IUserInfo) => void;
};

export type { Actions, IUserInfo };
