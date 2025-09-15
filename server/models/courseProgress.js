import mongoose, { mongo } from "mongoose"

const courseProgessSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
     courseId:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
     sheetCompleted:[],
}, {minimize:false})

const CourseProgess=mongoose.model("CourseProgress",courseProgessSchema)

export default CourseProgess;