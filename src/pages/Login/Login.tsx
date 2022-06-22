import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useLoginCellphone } from '@/api/login';
import useLoginDialog from '@/store/login';
import useUserInfo from '@/store/userInfo';

import { FormItem, MyTextField } from './styled';

function Login() {
  const [isLoginDialogOpen, loginActions] = useLoginDialog();
  const [, userInfoActions] = useUserInfo();

  const [form, setForm] = useState({
    phone: '',
    password: '',
  });

  const { data, refetch } = useLoginCellphone(form);

  useEffect(() => {
    if (data) {
      const token = data.token;
      const avatarUrl = data.profile.avatarUrl;
      const userName = data.account.userName;
      userInfoActions.setUserInfo({
        avatarUrl,
        userName,
        token,
      });
      loginActions.close();
    }
  }, [data, loginActions, userInfoActions]);

  return (
    <>
      <Dialog onClose={loginActions.close} fullWidth maxWidth="xs" open={isLoginDialogOpen}>
        <DialogTitle>手机号登录</DialogTitle>
        <DialogContent>
          <form>
            <FormItem>
              <MyTextField
                onChange={(e) => {
                  setForm({
                    ...form,
                    phone: e.target.value,
                  });
                }}
                value={form.phone}
                label="手机号"
                variant="filled"
              />
            </FormItem>
            <FormItem>
              <MyTextField
                onChange={(e) => {
                  setForm({
                    ...form,
                    password: e.target.value,
                  });
                }}
                value={form.password}
                label="密码"
                variant="filled"
              />
            </FormItem>
            <Button onClick={() => refetch()} variant="contained" color="primary">
              登录
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;
