import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ThemeIcon from '@mui/icons-material/InvertColors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/components/styled';
import useHotKeysDialog from '@/store/hotkeys';
import useTheme from '@/store/theme';

import { HotKeysButton, ChangeDarkButton } from './styled';

function Header() {
  const [, themeActions] = useTheme();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
