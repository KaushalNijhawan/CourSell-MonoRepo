import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { initiateConnection } from "@/lib/mongooseCon";
import { userM } from "@/lib/MongooseModels";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_CREDENTIALS as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRETE as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'xyz@gmail.com' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                const userObject : {username : string , password: string} = req.body as {username : string , password: string};
                if(userObject.username && userObject.password){
                    await initiateConnection();
                    const userFind = await userM.findOne({ username : userObject.username});
                    console.log(userFind);
                    if(userFind && userFind.username == userObject.username && userFind.password == userObject.password ){
                        return { id : userFind._id , name : userFind.username};
                    }
                }
                
                return null;
            }
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 60*60*4,

    },
    jwt: {
        encryption: true
    }
}

export default NextAuth(authOptions);