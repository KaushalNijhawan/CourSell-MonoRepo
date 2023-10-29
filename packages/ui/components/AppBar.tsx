import { Button, Typography } from "@mui/material";

export const AppBar = (props: any) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <Typography variant="h6">CourSell</Typography>
            <div>
                <Button variant={'contained'} onClick = {props.login} >
                    Login
                </Button>
                <Button variant={'contained'} style={{ marginLeft: '10px' }} onClick = {props.register} >
                    Register
                </Button>
            </div>
        </div>
    );
}

