import { GetServerSidePropsContext} from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import axios from "axios";
import { AppBar } from "ui";

const Courses = (props: any) => {
    return (
        <div>
            <AppBar />
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center' }}>
                {currentCourses ? currentCourses.map((course) => <CourseCard course={course} key={course._id} />) :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h2">
                            No Courses Found!
                        </Typography>
                    </div>}
            </div>
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
            const response = await axios.get('/api/courses');
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
                    session, courses
                }
            }
        }catch(err){
            console.log(err);
        }
    }

    return { 
        props:{}
    };
}

