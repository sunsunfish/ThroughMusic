import { Fragment } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

import { useLogout } from '@/api/login';
import useUserInfo from '@/store/userInfo';

import { UserPhoto } from './styled';

function UserAvatar() {
  const [userInfo, userInfoActions] = useUserInfo();
  const { refetch } = useLogout(userInfo.token, {
    onSuccess: (res: { code: number }) => {
      res.code === 200 &&
        userInfoActions.setUserInfo({
          avatarUrl: '',
          userName: '',
          token: '',
        });
    },
  });
  return (
    <Box sx={{ alignSelf: 'center' }}>
      <Tooltip
        title={
          <Fragment>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => refetch()}>
                  <ListItemText primary="登出" />
                </ListItemButton>
              </ListItem>
            </List>
          </Fragment>
        }
        arrow
      >
        <UserPhoto variant="rounded" src={userInfo?.avatarUrl}></UserPhoto>
      </Tooltip>
    </Box>
  );
}

export default UserAvatar;
