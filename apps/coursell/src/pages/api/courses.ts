import { courseM } from "@/lib/MongooseModels";
import { initiateConnection } from "@/lib/mongooseCon";
import {NextApiRequest, NextApiResponse} from "next";
const handler = async (req : NextApiRequest, res: NextApiResponse ) =>{
    
    if(req.method == "GET"){
        await initiateConnection();
        const courses = await courseM.find();
        return res.status(200).json({ courses: courses});
    }
    return res.status(404).json(null);
}

export default handler;