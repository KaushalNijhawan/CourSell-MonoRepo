import { Button, TextField, Typography , Card} from "@mui/material"
import { useState } from "react"

export const Signup = (props : any) => {
    const [username ,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <div>
            <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 350, width: 450 }}>
                    <Typography variant="h6" style={{marginBottom:10}}>
                        CourSell Register!
                    </Typography>
                    <TextField id="outlined-basic" label="username" variant="outlined" style={{ width: 280 }} onChange={(e) => setUsername(e.target.value)}/>
                    <TextField id="outlined-basic" label="password" variant="outlined" style={{ width: 280, marginTop: 10 }} type="password"  
                    onChange={ (e) => setPassword(e.target.value) }/>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        <Button variant='outlined' onClick={() => props.handleSignup(username , password)}>Register</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
