import { userM } from "@/lib/MongooseModels";
import { initiateConnection } from "@/lib/mongooseCon";
import { generateToken } from "jwt";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req : NextApiRequest , res: NextApiResponse) =>{
    if(req.method == "POST"){
        const userObject : {username : string ,password: string} = req.body;

        if(userObject.username && userObject.password){
            await initiateConnection();
            const userPresent = await userM.findOne({ username : userObject.username});
            if(userPresent && userPresent.username == userObject.username  && userPresent.password == userObject.password){
                return res.json({ message : 'logged In' , token : generateToken(userObject.username)});
            }
        }
    }

    return res.status(404).json({
        message : 'Invalid Path Or Credentials!'
    });
}

export default handler;