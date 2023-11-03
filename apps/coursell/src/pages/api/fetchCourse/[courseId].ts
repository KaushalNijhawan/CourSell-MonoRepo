import { courseM } from '@/lib/MongooseModels';
import { initiateConnection } from '@/lib/mongooseCon';
import axios from 'axios';
import { NextApiRequest, NextApiResponse} from 'next';
const handler = async (req: NextApiRequest , res: NextApiResponse) =>{
    if(req.method == 'GET'){
        let courseId = req.query.courseId;
        await initiateConnection();

        let course = await courseM.findById({ _id : courseId});

        if(course ){
            return res.json({message : 'Found Course!' , course: course});
        }
    }
    return res.status(404).json({
        message : 'Invalid Payload !'
    });
}

export default handler;