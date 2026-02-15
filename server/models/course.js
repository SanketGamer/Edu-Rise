    import mongoose from "mongoose";

    const lectureSchema=new mongoose.Schema({
    lectureId:{type:String,required: true},
    lectureTitle:{type:String,required: true},
    practiceUrl:{type:String,required: true},
    lectureUrl:{type:String,required: true},
    lectureOrder:{type:Number,required: true},
    lectureDificulty:{type:String,required: true},
    },{_id:false})

    const chapterSchema=new mongoose.Schema({
    chapterId:{type:String,required:true},
    chapterOrder:{type:Number,required:true},
    chapterTitle:{type:String,required:true},
    chapterContent:[lectureSchema],
    },{_id: false})


    const courseSchema=new mongoose.Schema({
        courseTitle:{
            type:String,
            required:true
        },
        courseDescription:{
            type:String,
            required:true
        },
       syllabus: [
        {
       week: Number,
       title: String,
       topics: [String],  
        }
      ],
        courseThumbnail:{
            type:String,
        },
        coursePrice:{
            type:Number,
            required:true
        },
        discount:{
            type:Number,
            required:true,
            min: 0,
            max: 100
        },
        isPublished: {
        type: Boolean,
        default: false  
       },
        courseContent:[chapterSchema],
        educator:{
            type:String,
            ref:"User"
        },
        expiryDate: { type: Date,required: true},

        enrolledStudents:[
            {type:String,ref:"User"}
        ]
    },{timestamps:true, minimize: false})

    const Course=mongoose.model("Course",courseSchema)

    export default Course;