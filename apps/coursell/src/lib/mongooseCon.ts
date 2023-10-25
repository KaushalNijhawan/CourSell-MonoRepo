import mongoose from "mongoose";
let initatedConnection = false;
export const initiateConnection = async () =>{
    if(initatedConnection){
        return;
    }
    initatedConnection = true;
    await mongoose.connect("mongodb://127.0.0.1:27017/course");
}