import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';

const HotKeysButton = styled(Button)(({ theme }) => ({
  height: 'fit-content',
  alignSelf: 'center',
  marginRight: theme.spacing(1),
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  '&:hover': {
    borderColor: theme.palette.text.disabled,
    color: theme.palette.text.disabled,
  },
}));

const ChangeDarkButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.text.disabled,
  },
}));

const LayoutHeaderBox = styled(Box)(() => ({
  gridArea: '1 / 1 / 2 / 3',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.text.disabled,
  },
}));

const UserAvatar = styled(Avatar)(() => ({
  alignSelf: 'center',
  cursor: 'pointer',
}));

export { HotKeysButton, ChangeDarkButton, LayoutHeaderBox, LoginButton, UserAvatar };
