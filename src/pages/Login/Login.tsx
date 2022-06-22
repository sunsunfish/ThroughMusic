import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { ILoginParams, ILoginRes, useLoginCellphone } from '@/api/login';
import useLoginDialog from '@/store/login';
import useUserInfo from '@/store/userInfo';

import { FormInput, FormItem } from './styled';

function Login() {
  const { register, handleSubmit } = useForm<ILoginParams>();
  const [isLoginDialogOpen, loginActions] = useLoginDialog();
  const [, userInfoActions] = useUserInfo();

  const [form, setForm] = useState({
    phone: '',
    password: '',
  });

  const onSubmit = (data: ILoginParams) => {
    setForm(data);
    refetch();
  };

  const { refetch } = useLoginCellphone(form, {
    onSuccess: (res: ILoginRes) => {
      const token = res.token;
      const avatarUrl = res.profile.avatarUrl;
      const userName = res.account.userName;
      userInfoActions.setUserInfo({
        avatarUrl,
        userName,
        token,
      });
      loginActions.close();
    },
  });

  return (
    <>
      <Dialog onClose={loginActions.close} fullWidth maxWidth="xs" open={isLoginDialogOpen}>
        <DialogTitle>手机号登录</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormInput
                {...register('phone', { required: true })}
                label="手机号"
                variant="filled"
              />
            </FormItem>
            <FormItem>
              <FormInput
                {...register('password', { required: true })}
                label="密码"
                variant="filled"
              />
            </FormItem>
            <Button type="submit" variant="contained" color="primary">
              登录
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;
