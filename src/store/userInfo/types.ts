import { IProfile, IUserAccount } from '@/api/login';

type IUserInfo = IProfile & IUserAccount;

type Actions = {
  setUserInfo: (userInfo: IUserInfo) => void;
};

export type { Actions, IUserInfo };
