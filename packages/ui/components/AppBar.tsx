import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const AppBar = (props: any) => {

    const [username, setUsername] = useState<string>(!props.loggedIn ? '' : props.loggedIn);

    useEffect(()=>{
        if(!username){
            props.redirect();
        }
    }, []);
    console.log(username);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <Typography variant="h6">CourSell</Typography>
            {username ?
                <div style={{ display:'flex'}}>
                    <Typography variant="h6" style={{marginRight:8}}>
                        Hello, {username}
                    </Typography>
                    <Button variant = "text" style={{marginRight:8}} color="success" onClick={props.coursesView}>View Courses</Button>
                    <Button variant = "text" style={{marginRight:8}} onClick = {props.addCourseView}>Add Courses</Button>
                    
                    <Button variant="text" color="error" onClick={props.logout}>LogOut</Button>
                </div> :
                <div>
                    <Button variant={'contained'} onClick={props.login} >
                        Login
                    </Button>
                    <Button variant={'contained'} style={{ marginLeft: '10px' }} onClick={props.register} >
                        Register
                    </Button>
                </div>}


        </div>
    );
}

