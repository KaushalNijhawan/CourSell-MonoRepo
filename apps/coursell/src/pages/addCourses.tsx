import { Button, TextField, Typography, Card } from "@mui/material";
import { useState } from "react";
import { AddCourses, AppBar } from "ui";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import axios from "axios";

const AddCourse = (props: any) => {
    const router = useRouter();
    const handleSubmit = async (title: string, description: string, price: string, imageLink: string) => {
        try {
            let response = await axios.post("http://localhost:3000/api/addCourse", {
                title: title, description: description, price: price, imageLink: imageLink
            }, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            if(response && response.data && response.data.courseId ){
                router.push('/courses');
            }
        } catch (err) {
            console.log(err);
        }


    }

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

    const redirect = () => {
        router.push('/');
    }

    return (
        <div>
            <AppBar login={handleLogin} register={handleRegister} loggedIn={username} coursesView={coursesView}
                addCourseView={addCourseView} logout={logout} redirect={redirect} />
            <AddCourses handleSubmit={handleSubmit} />
        </div>
    );
}

export const getServerSideProps = async (ctxt: GetServerSidePropsContext) => {
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

export default AddCourse;