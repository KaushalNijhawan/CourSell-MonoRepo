import { AddCourses, AppBar, CourseCard } from "ui";
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import { useState } from "react";

import { useRouter } from 'next/router';
import axios from "axios";
import { Grid } from "@mui/material";
const UpdateCourse = (props: any) => {
    const [username, setUsername] = useState<string>(props.sessionObj && props.sessionObj.user && props.sessionObj.user.name ? props.sessionObj.user?.name as string : '');
    const router = useRouter();
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


    const handleCardView = () => {

    }
    return (
        <>
            <AppBar login={handleLogin} register={handleRegister} loggedIn={username} coursesView={coursesView}
                addCourseView={addCourseView} logout={logout} />
            <Grid container>
                <Grid sm={12} md={6} xs={12} lg={6}>
                    <CourseCard course={props.course} key={props.course._id} handleCardView
                        ={handleCardView} updateProp={true} />
                </Grid>
                <Grid sm={12} md={6} xs={12} lg={6}>
                    <AddCourses />
                </Grid>


            </Grid>
        </>
    );
}

export const getServerSideProps = async (ctxt: GetServerSidePropsContext) => {
    const { req, res } = ctxt;
    let courseId = ctxt.query.course;

    const session = await getServerSession(req, res, authOptions);

    if (session) {
        let sessionObj = session;
        if (sessionObj && sessionObj.user && (!sessionObj.user.email || !sessionObj.user.image)) {
            sessionObj.user.email = !sessionObj.user.email ? null : sessionObj.user.email;
            sessionObj.user.image = !sessionObj.user.image ? null : sessionObj.user.image;
        }
        const response = await axios.get(`http://localhost:3000/api/fetchCourse/${courseId}`);

        if (response && response.data) {
            return {
                props: {
                    sessionObj: sessionObj, course: response.data.course
                }
            }
        }

        return {
            props: {}
        };
    }

    return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    };
}

export default UpdateCourse;