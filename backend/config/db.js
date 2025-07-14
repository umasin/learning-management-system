import mongoose from "mongoose";
const conndb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("Database connected");
        
    } catch (error) {
    console.log("Error in connecting the database");
    }
}

export default conndb;