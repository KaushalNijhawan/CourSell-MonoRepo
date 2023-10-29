import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Signin = (props : any) => {
    const handleLogin = () =>{
        props.handleLogin(username , password);
    }

    const [password, setPassword]  =  useState<string>('');
    const [username , setUsername] = useState<string>('');

    return (
        <div>
            <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 350, width: 450 }}>
                    <Typography variant="h6" style={{marginBottom:10}}>
                        CourSell Login!
                    </Typography>
                    <TextField id="outlined-basic" label="username" variant="outlined" style={{ width: 280 }} onChange={(e) => setUsername(e.target.value)}/>
                    <TextField id="outlined-basic" label="password" variant="outlined" style={{ width: 280, marginTop: 10 }}
                        type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        <Button variant='outlined' onClick={handleLogin}>Login</Button>
                        <Button variant='outlined' style={{ marginLeft: 10 }}>Register</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
