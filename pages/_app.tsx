import 'styles/global.scss';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryClient } from 'utils/ReactQueryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ReactQueryClient.instance}>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
