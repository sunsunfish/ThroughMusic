import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Sidebar from '@/sections/Sidebar';
import Footer from '@/sections/Footer';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import { LayoutBox, LayoutContentBox } from '@/components/styled';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <LayoutBox>
          <Header />
          <LayoutContentBox>
            <Pages />
            <Sidebar />
          </LayoutContentBox>
          <Footer />
        </LayoutBox>
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
