import ThemeIcon from '@mui/icons-material/InvertColors';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useHotKeysDialog from '@/store/hotkeys';
import useLoginDialog from '@/store/login';
import useTheme from '@/store/theme';
import useUserInfo from '@/store/userInfo';

import UserAvatar from './components/UserAvatar';
import { ChangeDarkButton, HotKeysButton, LayoutHeaderBox, LoginButton } from './styled';

function Header() {
  const [userInfo] = useUserInfo();
  const [, themeActions] = useTheme();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  const [, loginActions] = useLoginDialog();

  return (
    <LayoutHeaderBox sx={{ flexGrow: 1 }}>
      <AppBar color="primary" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <LibraryMusicIcon />
            ThroughMusic
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + /
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <ChangeDarkButton edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </ChangeDarkButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            {userInfo?.token ? (
              <UserAvatar />
            ) : (
              <LoginButton size="small" onClick={loginActions.open}>
                登录
              </LoginButton>
            )}
          </FlexBox>
        </Toolbar>
      </AppBar>
    </LayoutHeaderBox>
  );
}

export default Header;
