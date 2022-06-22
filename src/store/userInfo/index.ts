import { atom, useRecoilState } from 'recoil';

import localStorageEffect from '@/utils/localStorageEffect';

import type { Actions, IUserInfo } from './types';

const userInfoState = atom<IUserInfo>({
  key: 'userInfoState',
  default: {} as IUserInfo,
  effects_UNSTABLE: [localStorageEffect('userInfo')],
});

function useUserInfo(): [IUserInfo, Actions] {
  const [userInfo, setInfo] = useRecoilState(userInfoState);

  function setUserInfo(userInfo: IUserInfo) {
    setInfo(userInfo);
  }

  return [userInfo, { setUserInfo }];
}

export default useUserInfo;
