import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Signup} from 'ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleSignup = (username : string , password : string) =>{
    console.log(username);
    console.log(password);
  }
  
  return (
    <>
      <Signup  handleSignup  = {handleSignup}></Signup>
    </>
  )
}
