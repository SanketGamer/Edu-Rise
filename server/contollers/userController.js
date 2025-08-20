import User from "../models/user.js"
import Course from "../models/course.js";
import Purchase from "../models/purchase.js"
import Stripe from "stripe";
import {getAuth} from "@clerk/express"

export async function GetUserData(req,res){
try{
    const {userId}=getAuth(req);
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
        const {userId}=getAuth(req);
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
        const {userId}=getAuth(req)
        const userData=await User.findById(userId)
        const courseData=await Course.findById(courseId)
        
        if(!userData || !courseData){
            return res.json({success:false,message:"Data not found"})
        }  

        const purchaseData={
            courseId:courseData._id,
            userId:userData._id,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice/100).toFixed(2),
        }
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
                unit_amount: Math.floor(newPurchase.amount) * 100
            },
            quantity:1
        }]

        //payment session
        const session=await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-enrollments`,
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