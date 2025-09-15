import User from "../models/user.js"
import Course from "../models/course.js";
import Purchase from "../models/purchase.js"
import Stripe from "stripe";
import CourseProgess from "../models/courseProgress.js";

export async function GetUserData(req,res){
try{
     const { userId } = req.auth(); 
    const user=await User.findById(userId)
    if(!user){
        return res.json({success:false,message:"User Not found"})
    }
    res.json({success:true,user})
}
catch(error){
    res.json({success:false,message:error.message})
}
}

//User Enrolled Courses with course link
export async function GetCourseLink(req,res){
    try{
        const { userId } = req.auth(); 
        const userData=await User.findById(userId).populate("enrolledCourses")
        res.json({success:true, enrolledCourses:userData.enrolledCourses})
    }
    catch(error){
    res.json({success:false,message:error.message})
    }
}

//Purchase Course
export async function purchaseCourse(req,res){
    try{
        const {courseId}=req.body;
        const {origin}=req.headers;
      const { userId } = req.auth();    
        const userData=await User.findById(userId)
        const courseData=await Course.findById(courseId)
        
        if(!userData || !courseData){
            return res.json({success:false,message:"Data not found"})
        }  
         const discountedAmount = courseData.coursePrice - (courseData.discount * courseData.coursePrice / 100);
        const purchaseData={
            courseId:courseData._id,
            userId:userData._id,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice/100).toFixed(2),
        }
        console.log("Purchase Data to be saved:", purchaseData);
        const newPurchase=await Purchase.create(purchaseData)

        //Stripe Gateway initialise
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)
        const currency=process.env.CURRENCY.toLowerCase()

        //creating line items for stripe
        const line_items=[{
            price_data:{
                currency,
                product_data:{
                    name: courseData.courseTitle,
                },
                unit_amount: Math.floor(newPurchase.amount)*100
            },
            quantity:1
        }]

        //payment session
        const session=await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/my-enrollments`,
            cancel_url: `${origin}/`,
            line_items: line_items,
            mode: "payment",
            metadata: {
                purchaseId: newPurchase._id.toString()
            }
        })
        res.json({success:true,success_url: session.url})
    }
    catch(error){
    res.json({success:false,message:error.message})
    }
}

//Update User Course Progress
export async function updateCourseProgress(req,res){
    try{
     const { userId } = req.auth(); 
        const {courseId,lectureId}=req.body;
        const progressData=await CourseProgess.findOne({userId,courseId})
        if(progressData){
            if(progressData.sheetCompleted.includes(lectureId)){
            return res.json({success:true,messaeg:"Sheet Completed"})
            }
          progressData.sheetCompleted.push(lectureId)
          await progressData.save()
        }
        else{
            await CourseProgess.create({userId,courseId,sheetCompleted:[lectureId]})
        }
        res.json({success:true,message:"Progress updated"})
    }
     catch(error){
    res.json({success:false,message:error.message})
    }
}

//Progess Details
export async function getUserCourseProgress(req,res){
    try{
    const { userId } = req.auth(); 
     const {courseId,lectureId}=req.body
     const progressData = await CourseProgess.findOne({userId,courseId})
     res.json({success:true,progressData})
    }
    catch(error){
    res.json({success:false,message:error.message})
    }
}