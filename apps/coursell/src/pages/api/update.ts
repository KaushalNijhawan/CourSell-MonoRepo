import { courseM } from '@/lib/MongooseModels';
import {NextApiRequest, NextApiResponse} from 'next';
const handler = async (req: NextApiRequest , res: NextApiResponse) =>{
    if(req.method == "PUT"){
        const params = req.query;
        const courseDetails= req.body;

        if(courseDetails && courseDetails.price && courseDetails.description && courseDetails.imageLink){
            let updateCourse = await courseM.findByIdAndUpdate({_id : courseDetails._id} , { price: courseDetails.price, description : 
            courseDetails.description, imageLink : courseDetails.imageLink, title: courseDetails.title});
            
            return res.json({ message : 'Updated Course!' , _id : courseDetails._id});

        }
    }

    return res.status(404).json({message : 'Invalid Payload or Link' });
}

export default handler;