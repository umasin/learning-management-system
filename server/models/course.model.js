import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    thumbnail:{
        type:String,
        required: true
    },
    quizAvailable:{
        type:String,
        required: true
    },
    pdfLink:{
        type:String,
        required: true
    }
})

const Course = mongoose.model("Course", courseSchema);
export default Course;