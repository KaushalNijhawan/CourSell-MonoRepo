import '@/styles/globals.css'
import { SessionProvider , signIn, signOut} from 'next-auth/react';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AppBar } from 'ui'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const handleRegister = () =>{
    router.push('/signup');
  }

  const handleLogin = () =>{
      signIn();
  }
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <AppBar  login = {handleLogin} register = {handleRegister}/>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );


}
