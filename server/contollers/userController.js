import User from "../models/user.js"
import Course from "../models/course.js";
import Purchase from "../models/purchase.js"
import Stripe from "stripe";
import CourseProgess from "../models/courseProgress.js";
import { clerkClient } from "@clerk/express";

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

//update is this student
export async function UpdateStudentUserData(req,res){
try{
const {userId}=req.auth;
await clerkClient.users.updateUserMetadata(userId,{ publicMetadata:{role:"Student"}})
res.json({success:true,msg:"Now you are a Student"})
}
catch(err){
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
export async function purchaseCourse(req, res) {
  try {
    const { courseId } = req.body;
    const { origin } = req.headers;
    const { userId } = req.auth(); // ensure req.auth() works

    console.log("User ID:", userId, "Course ID:", courseId);

    const userData = await User.findById(userId);
    const courseData = await Course.findById(courseId);
    const expiryDate=new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    if (!userData || !courseData) {
      return res.json({ success: false, message: "Data not found" });
    }

    const discountedAmount = courseData.coursePrice * (1 - courseData.discount / 100);

    // Create purchase as pending
    const newPurchase = await Purchase.create({
      courseId: courseData._id,
      userId: userData._id,
      amount: Math.round(discountedAmount),
      status: "pending",
      expiryDate
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const currency = process.env.CURRENCY.toLowerCase();

    // Stripe line items
    const line_items = [
      {
        price_data: {
          currency,
          product_data: { name: courseData.courseTitle },
          unit_amount: Math.round(discountedAmount * 100), // in paise/cents
        },
        quantity: 1,
      },
    ];

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${origin}/my-enrollments`,
      cancel_url: `${origin}/`,
      metadata: { purchaseId: newPurchase._id.toString() },
    });

    res.json({ success: true, success_url: session.url });
  } catch (error) {
    res.json({ success: false, message: error.message });
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