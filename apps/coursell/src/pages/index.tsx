import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Signup } from 'ui'
import { SessionProvider , signIn, signOut, useSession} from 'next-auth/react';
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const sesssionObj = useSession();
  const router = useRouter();
  
  const handleRegister = () =>{
    router.push('/signup');
  }

  const handleLogin = () =>{
      signIn();
  }

  console.log(sesssionObj);
  return (
    <>
      <AppBar  login = {handleLogin} register = {handleRegister}/>
    </>
  )
}
