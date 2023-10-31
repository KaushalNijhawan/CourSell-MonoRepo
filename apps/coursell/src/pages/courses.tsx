import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import axios from "axios";
import { AppBar } from "ui";
import { useState } from "react";
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import { CourseCard } from "ui";
import { Grid, Typography } from "@mui/material";
const Courses = (props: any) => {
    console.log(props);
    const router = useRouter();

    const [username, setUsername] = useState<string>(props.sessionObj && props.sessionObj.user && props.sessionObj.user.name
        ? props.sessionObj.user.name : '');

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
        router.push('/addCourse');
    }

    const logout = () => {
        router.push('/');
    }
    return (
        <div>
            <AppBar login={handleLogin} register={handleRegister} loggedIn={username} coursesView={coursesView}
                addCourseView={addCourseView} logout={logout} />
            <Grid container >
                <Grid item md={12} xs={12} lg={12} >
                    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>

                        {props.courses ? props.courses.map((course: any) => <CourseCard course={course} key={course._id} />) :
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h2">
                                    No Courses Found!
                                </Typography>
                            </div>}

                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Courses;

export const getServerSideProps = async (ctxt: GetServerSidePropsContext) => {
    const { req, res } = ctxt;

    const session = await getServerSession(req, res, authOptions);

    if (session) {
        try {
            let courses = [];
            const response = await axios.get('http://localhost:3000/api/courses');
            if (response && response.data) {
                courses = response.data.courses;
            }

            let sessionObj = session;
            if (sessionObj && sessionObj.user && (!sessionObj.user.email || !sessionObj.user.image)) {
                sessionObj.user.email = !sessionObj.user.email ? null : sessionObj.user.email;
                sessionObj.user.image = !sessionObj.user.image ? null : sessionObj.user.image;
            }

            return {
                props: {
                    sessionObj: sessionObj,
                    courses: courses
                }
            }
        } catch (err) {

        }
    }

    return {
        props: {}
    };
}

