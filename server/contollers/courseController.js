import Course from "../models/course.js";

//Get All Courses
export async function GetAllCourses(req,res){
try{
    const courses=await Course.find({isPublished:true}).select(['-courseContent','-enrolledStudents']).populate({path:"educator"})
    res.json({success:true,courses})
}
catch(error){
    res.json({success:false,message:error.message})
}
}

//Get Course by Id
export async function getCourseId(req,res){
const {id}=req.params
try{
const courseData=await Course.findById(id).populate({path:"educator"})
//remove youtube solution if ispreview->false
courseData.courseContent.forEach(chapter=>{
    chapter.chapterContent.forEach(lecture=>{
        if(!lecture.discount===0){
            lecture.lectureUrl=""
        }
    })
})
return res.json({success:true,courseData})
}
catch(error){
    res.json({success:false,message:error.message})
}
}


