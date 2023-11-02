import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Signup } from 'ui'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import { Typography, Grid } from '@mui/material';
import { useState } from 'react';
import { GetServerSidePropsContext } from "next";
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {
  const router = useRouter();

  const [username, setUsername] = useState<string>(props.sessionObj && props.sessionObj.user && props.sessionObj.user.name ? props.sessionObj.user?.name as string : '');

  const handleRegister = () => {
    router.push('/signup');
  }

  const handleLogin = () => {
    signIn();
  }

  const coursesView = () => {
    router.push('/courses');
  }

  const addCourseView = () => {
    router.push('/addCourses');
  }

  const logout = () => {
    router.push('/');
  }

  const redirect = () =>{
    router.push('/');
  }

  return (
    <>
      <AppBar login={handleLogin} register={handleRegister} loggedIn={username} coursesView={coursesView}
        addCourseView={addCourseView} logout={logout} redirect = {redirect} />
      <Grid container style={{ padding: 50, marginTop: '5vh' }}>
        <Grid item md={7} sm={6} xs={12}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>
              CourSell
            </Typography>
            <p style={{ fontSize: '30px' }}>
              A place to learn , Chance to grow
            </p>
            <></>
          </div>
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <img src="https://static.wixstatic.com/media/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg/v1/fill/w_820,h_460,al_c,q_85/65246d_c7bd3ba476fb4191af59a11494ad027f~mv2.jpg"
            height='250' width='300' />
        </Grid>
      </Grid>
    </>
  )
}


export const getServerSideProps = async (ctxt: GetServerSidePropsContext) => {
  console.log(ctxt.req.cookies);
  const session = await getServerSession(ctxt.req, ctxt.res, authOptions);
  if (session) {
    let sessionObj = session;
    if (sessionObj && sessionObj.user && (!sessionObj.user.email || !sessionObj.user.image)) {
      sessionObj.user.email = !sessionObj.user.email ? null : sessionObj.user.email;
      sessionObj.user.image = !sessionObj.user.image ? null : sessionObj.user.image;
    }

    return {
      props: { sessionObj }
    }
  }

  return {
    props: {}
  };
}