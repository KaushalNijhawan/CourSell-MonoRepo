import { Button, TextField, Typography , Card} from "@mui/material";
import { useState } from "react";

export const AddCourses = (props: any) =>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const handleSubmit = (title: string , description: string , price: string , imageLink: string) => {
        props.handleSubmit(title, description, price, imageLink);
    }
    return(
        <div style={{ height: '90vh', width: '90vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500, width: 450 }}>
                    <Typography variant="h6">
                        CourSell Login!
                    </Typography>
                    <TextField id="outlined-basic" label="Title" variant="outlined" style={{ width: 250 }} onChange={(e) => setTitle(e.target.value)} />
                    <TextField id="outlined-basic" label="Description" variant="outlined" style={{ width: 250, marginTop: 10 }}
                        type="text" onChange={(e) => setDescription(e.target.value)}  />
                    <TextField id="outlined-basic" label="Price" variant="outlined" style={{ width: 250, marginTop: 10 }} onChange={(e) => setPrice(e.target.value)}
                 />
                    <TextField id="outlined-basic" label="Image" variant="outlined" style={{ width: 250, marginTop: 10 }} onChange={(e) => setImageLink(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }} >
                        <Button variant='outlined' style={{ marginLeft: 10 }} color='success' onClick={() => handleSubmit(title, description, price, imageLink)}>Add Course</Button>
                    </div>
                </Card>
            </div>
    );
}
