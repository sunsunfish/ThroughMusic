import { atom, useRecoilState } from 'recoil';

import type { Actions, IUserInfo } from './types';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: IUserInfo) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

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
