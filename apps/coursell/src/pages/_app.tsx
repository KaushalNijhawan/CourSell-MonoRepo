import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AppBar } from 'ui';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <AppBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );


}
