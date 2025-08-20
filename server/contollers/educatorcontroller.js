import {clerkClient,getAuth} from "@clerk/express"
import Course from "../models/course.js";
import {v2 as cloudinary} from "cloudinary"
import Purchase from "../models/purchase.js";

//update role to become educator
export async function updateRollEducator(req,res){
    try{
        const {userId}=getAuth(req);
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: "educator"
            }
        })
        res.json({success:true,message:"You can publish a course now"})

    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

//Add new Course
export async function AddCourse(req,res){
    try{
        const {courseData}=req.body;
        const imageFile=req.file;
        const educatorId = req.auth?.userId;

        if(!imageFile){
            return res.json({success:false,message:"thumbnail Not Attached"})
        }

        const parsedCourseData=await JSON.parse(courseData)
        parsedCourseData.educator=educatorId
       const newCourse=await Course.create(parsedCourseData)
       const imageUpload=await cloudinary.uploader.upload(imageFile.path)
       newCourse.courseThumbnail=imageUpload.secure_url
       await newCourse.save()
       res.json({success:true,message:"Course Added"})
    }
    catch(error){
          res.status(500).json({success:false,message:error.message})
    }
}

//Get Educator Courses
export async function getEducatorCourses(req,res){
    try{
       const educator=req.auth.userId
       const courses=await Course.find({educator})
       res.json({success:true,courses})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}

//Get Educator Dashboard Data(total Earning,enrolled students,no of courses)
export async function educatorDashboardData(req,res){
    try{
        const educator=req.auth.userId;
        const courses=await Course.find({educator})
        const totalCourse=courses.length
        const courseIds=courses.map((course)=>course._id)
        //total earning from purchases
        const purchases=await Purchase.find({
            courseId:{$in : courseIds},  //$in means find the purchses where courseId match
            status: 'completed'
        })
        const totalearnings=purchases.reduce((sum,purchase)=>sum+purchase.amount,0)
        //collect unique enrolled student IDs with their course titles
        const enrollStudentData=[];
        for(const course of courses){
            const students=await User.find({_id:{$in:course.enrolledStudents}},'name imageUrl')
            students.forEach(student=>{
                enrollStudentData.push({courseTitle:course.courseTitle,student})
            })
        }
        res.json({success:true,dashboardData:{totalearnings,enrollStudentData,totalCourse}})
    }
    catch(error){
     res.status(500).json({success:false,message:error.message})
    }
}

//Get enrolled student data with purchase data
export async function GetEnrollStudentData(req,res){
try{
  const educator=req.auth.userId;
  const courses=await Course.find({educator})
  const courseIds=courses.map(course=>course._id)
  const purchases=await Purchase.find({
    courseId:{$in:courseIds},
    status:"completed"
  }).populate("userId","name","imageUrl").populate("courseId","courseTitle")  //populate when the courseId only content mongodb id(types:ObjectId) it actual give the document from the reffrence
  const enrolledStudents=purchases.map(purchase=>({
    student:purchase.userId,
    courseTitle:purchase.courseTitle,
    purchaseDate:purchase.createdAt
  }))
  res.json({success:true,enrolledStudents})
}
catch(error){
res.status(404).json({success:false,message:error.message})
}

}
