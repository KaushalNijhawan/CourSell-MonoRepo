import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AppBar } from 'ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );


}
