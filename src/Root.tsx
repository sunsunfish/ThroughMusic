import { ComponentType, StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import ThemeProvider from '@/theme/Provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios, { AxiosContext } from './api/request';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false,
    },
  },
});

const AxiosProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const axiosValue = useMemo(() => {
    return axios;
  }, []);

  return <AxiosContext.Provider value={axiosValue}>{children}</AxiosContext.Provider>;
};

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <HelmetProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </HelmetProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </AxiosProvider>
    </StrictMode>,
  );
}

export default render;
