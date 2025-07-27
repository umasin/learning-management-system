import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log(`Connected to Mongo DB Database`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;