import { atom, useRecoilState } from 'recoil';

import type { Actions } from './types';

const loginDialogState = atom<boolean>({
  key: 'loginDialogState',
  default: true,
});

function useLoginDialog(): [boolean, Actions] {
  const [isOpen, setIsOpen] = useRecoilState(loginDialogState);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return [isOpen, { close, open }];
}

export default useLoginDialog;
