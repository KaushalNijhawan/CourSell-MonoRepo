import jwt from 'jsonwebtoken';

const secret_text = "this is a secrete @@@@@@@@@@@@@@@@";

const generateToken = (username: string) => {

    let token = jwt.sign({
        username: username
    }, secret_text, { expiresIn: 3600 });

    return token;
}

export const verifyToken = (token: string): boolean =>{
    try{
        jwt.verify(token ,secret_text);
        return true;
    }catch(err){
        console.log(err);
    }
    return false;
}