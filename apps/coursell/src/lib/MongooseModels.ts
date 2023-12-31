import mongoose from "mongoose";
// mongoose.createConnection("mongodb://127.0.0.1:27017/course").asPromise().then(()=> console.log('connect'));
const userSchema = new mongoose.Schema({
    username : String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title : String, 
    description : String,
    price : String,
    imageLink: String,
    published : Boolean
});

export const userM = mongoose.models.Users || mongoose.model('Users',userSchema) ;

export const courseM = mongoose.models.Courses || mongoose.model('Courses' , courseSchema);