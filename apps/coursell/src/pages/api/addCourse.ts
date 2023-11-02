import { courseM } from '@/lib/MongooseModels';
import {NextApiRequest, NextApiResponse} from 'next';
const handler  = async (req : NextApiRequest, res: NextApiResponse ) =>{
    if(req.method == "POST"){
        const courseDetail = req.body;
        if(courseDetail &&  courseDetail.title && courseDetail.price && courseDetail.description && courseDetail.imageLink){
            const course = new courseM({title : courseDetail.title, description: courseDetail.description, price : courseDetail.price
            , imageLink : courseDetail.imageLink});
            let savedCourse = await course.save();

            return res.status(200).json({ message : 'Course Added!' , courseId : savedCourse._id});

        }
    }

    return res.status(404).json({message : 'Invalid Payload!'});
}

export default handler;