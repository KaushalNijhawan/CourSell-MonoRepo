import { Card, CardMedia, Typography, Button, CardContent, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";
export const CourseCard = (props: any) => {
    return (
        <div style={{ marginLeft: 10, marginTop: 10 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.course.imageLink}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.course.description}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><p>Price: </p></div> <div><p>{props.course.price}</p></div>
                    </div>
                </CardContent>
                <CardActions>
                    {!props.updateProp ? 
                    <Button size="small" onClick={() => props.handleCardView(props.course._id)}>View & Edit</Button> : null}
                    
                </CardActions>
            </Card>
        </div>
    )
}
