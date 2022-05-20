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

export { HotKeysButton, ChangeDarkButton };
