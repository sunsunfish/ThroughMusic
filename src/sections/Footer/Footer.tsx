import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { LayoutFooterBox } from './styled';

function Footer() {
  return (
    <LayoutFooterBox sx={{ flexGrow: 1 }}>
      <AppBar elevation={1} position="static">
        <Toolbar sx={{}}>Footer</Toolbar>
      </AppBar>
    </LayoutFooterBox>
  );
}

export default Footer;
