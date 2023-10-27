import {Signup} from "ui";
const Register = () =>{
    const handleSignup = (username : string , password : string) =>{
        console.log(username);
        console.log(password);
        
      }
      
      return (
        <>
          <Signup  handleSignup  = {handleSignup}></Signup>
        </>
      )
}

export default Register;