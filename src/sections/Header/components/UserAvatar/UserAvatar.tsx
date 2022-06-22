import { Fragment, useEffect } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

import { useLogout } from '@/api/login';
import useUserInfo from '@/store/userInfo';

import { UAvatar } from './styled';

function UserAvatar() {
  const [userInfo, userInfoActions] = useUserInfo();
  const { data, refetch } = useLogout(userInfo?.token);

  useEffect(() => {
    const code = data?.code;
    code === 200 &&
      userInfoActions.setUserInfo({
        avatarUrl: '',
        userName: '',
        token: '',
      });
  }, [data, userInfoActions]);

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
        <UAvatar variant="rounded" src={userInfo?.avatarUrl}></UAvatar>
      </Tooltip>
    </Box>
  );
}

export default UserAvatar;
