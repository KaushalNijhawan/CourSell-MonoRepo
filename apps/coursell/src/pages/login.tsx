import axios from 'axios';
import { Signin } from 'ui';

const Login = () => {

    const handleLogin = async (username: string, password: string) => {
        if (username && password) {
            const userLoggin = {
                username: username,
                password: password
            };
            try {
               const response =  await axios.post('/api/login', userLoggin, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <>
             <Signin handleLogin = {handleLogin}/>
        </>
    ); 
}

export default Login;
