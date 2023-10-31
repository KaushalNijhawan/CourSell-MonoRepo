import { GetServerSidePropsContext} from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import axios from "axios";
import { AppBar } from "ui";
import { useState } from "react";

const Courses = (props: any) => {
    console.log(props);

    const [username , setUsername] = useState<string>(props.sessionObj && props.sessionObj.user && props.sessionObj.user.name 
        ? && props.sessionObj.user.name : '');
    return (
        <div>
            <AppBar />
            {/* <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>
                {currentCourses ? currentCourses.map((course) => <CourseCard course={course} key={course._id} />) :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h2">
                            No Courses Found!
                        </Typography>
                    </div>}
            </div> */}
        </div>  
    );
}

export default Courses;

export const getServerSideProps = async (ctxt : GetServerSidePropsContext) =>{
    const {req, res} = ctxt;

    const session = await getServerSession(req, res, authOptions);

    if(session){
        try{
            let courses = [];
            const response = await axios.get('http://localhost:3000/api/courses');
            if(response && response.data){
                courses = response.data.courses;
            }

            let sessionObj = session;
            if(sessionObj && sessionObj.user && (!sessionObj.user.email || !sessionObj.user.image) ){
                sessionObj.user.email = !sessionObj.user.email ? null : sessionObj.user.email;
                sessionObj.user.image = !sessionObj.user.image ? null : sessionObj.user.image;
            }

            return{ 
                props:{
                    sessionObj : sessionObj,
                    courses : courses
                }
            }
        }catch(err){

        }
    }

    return { 
        props:{}
    };
}

