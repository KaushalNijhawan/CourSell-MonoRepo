import { initiateConnection } from "@/lib/mongooseCon";
import { userM } from "db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req : NextApiRequest , res: NextApiResponse) =>{
    if(req.method == 'POST'){
        const userObj = req.body;
        if(userObj && userObj.username && userObj.password){
            await initiateConnection();
            let storedObj = await userM.findOne({ username : userObj.username });

            if(storedObj && storedObj.username){
                return res.status(401).json({ message : 'User Exists!' });
            }

            let userCreate = new userM({ username : userObj.username , password : userObj.password});
            let savedObject = await userCreate.save();

            return res.status(200).json({ message : 'User Saved!', userId : savedObject._id });
        }
    }
}

export default handler;