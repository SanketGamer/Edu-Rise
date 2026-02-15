import {clerkClient} from "@clerk/express"
import Course from "../models/course.js";
import {v2 as cloudinary} from "cloudinary"
import Purchase from "../models/purchase.js";
import User from "../models/user.js"
import Educator from "../models/educator.js"
import validator from "validator"
import jwt from "jsonwebtoken"



//educator authentication
export async function Signup(req, res) {
    try {
        const { name, email, password } = req.body;

        const exist = await Educator.findOne({ email });
        if (exist) {
            return res.json({ success: false, msg: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, msg: "Please enter a valid email" });
        }

        // IMPORTANT: AWAIT HERE
        const educator = await Educator.create({
            name,
            email,
            password
        });

        console.log("Educator created:", educator);

        const token = jwt.sign(
            { educatorId: educator._id },        // MUST contain this
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, msg: error.message });
    }
}

export async function Signin(req, res) {
    try {
        const { email, password } = req.body;

        // IMPORTANT: await here
        const educator = await Educator.findOne({ email });

        if (!educator) {
            return res.json({ success: false, msg: "Educator doesn't exist" });
        }

        // TODO: compare password (you haven't added password hashing!)

        const token = jwt.sign(
            { educatorId: educator._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: error.message || "Signin failed" });
    }
}

//get educator data
export async function GetEducatorData(req,res){
try{
    const { userId } = req.auth(); 
    const educator=await User.findById(userId)
    if(!educator){
        return res.json({success:false,message:"Educator Not found"})
    }
    res.json({success:true,educator})
}
catch(error){
    res.json({success:false,message:error.message})
}
}
//update role to become educator
export async function updateRollEducator(req,res){
    try{
        const { userId } = req.auth(); 
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

//role to become a student by default
export async function BecomeStudent(req,res){
  try{
    const { userId } = req.auth(); 
    await clerkClient.users.updateUserMetadata(userId,{
        publicMetadata:{
            role:"Student"
        }
    })
     res.json({success:true,message:"You can now purchase the course"})
  }
  catch(error){
    res.json({success:false,message:error.message})
  }
}

//Add new Course
export async function AddCourse(req, res) {
  try {
    const educatorId = req.educatorId;

    if (!educatorId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: educatorId missing"
      });
    }

    const { courseData } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "Thumbnail not attached" });
    }

    const parsedCourseData = JSON.parse(courseData);
    parsedCourseData.educator = educatorId;

    // ✅ ADD EXPIRY DATE 1 YEAR FROM NOW
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    parsedCourseData.expiryDate = expiryDate;

    // Create course
    const newCourse = await Course.create(parsedCourseData);

    // Upload thumbnail
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    newCourse.courseThumbnail = imageUpload.secure_url;

    await newCourse.save();

    res.json({ success: true, message: "Course Added" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}



//get syllabus
export async function GetSyllabus(req,res){
    try{
     const {courseId} = req.params;
     const course=await Course.findById(courseId).select("syllabus")
     if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({success:true,syllabus:course.syllabus})
    }
    catch(error){
    res.status(500).json({success:false,message:error.message})
    }
}

//Get Educator Courses` 
export async function getEducatorCourses(req,res){
    try{
       const educator = req.educatorId
       const courses=await Course.find({educator})
       res.json({success:true,courses})
    }
    catch(error){
        res.status(500).json({success:false,message:error.message})
    }
}

//Get Educator Dashboard Data(total Earning,enrolled students,no of courses)
export async function educatorDashboardData(req, res) {
  try {
    const educator = req.educatorId;

    if (!educator) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // 1️⃣ Fetch all courses of this educator
    const courses = await Course.find({ educator });

    const totalCourse = courses.length;

    if (courses.length === 0) {
      return res.json({
        success: true,
        dashboardData: {
          totalCourse: 0,
          totalearnings: 0,
          enrollStudentData: []
        }
      });
    }

    // 2️⃣ Get all course IDs
    const courseIds = courses.map((c) => c._id);

    // 3️⃣ Find all completed purchases
    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed"
    });
    console.log("PURCHASES FOUND:", purchases.length);

    // 4️⃣ Total earnings
    const totalearnings = purchases.reduce((sum, p) => sum + p.amount, 0);

    // 5️⃣ Collect all enrolled student data
    const enrollStudentData = [];

    for (const course of courses) {

      if (!course.enrolledStudents || course.enrolledStudents.length === 0) {
        continue;
      }

      // Only IDs allowed here
      const students = await User.find(
        { _id: { $in: course.enrolledStudents } },
        "name imageUrl"
      );

      console.log("Students fetched:", students.length);

      students.forEach((student) => {
        enrollStudentData.push({
          courseTitle: course.courseTitle,
          student
        });
      });
    }

    // 6️⃣ Respond
    return res.json({
      success: true,
      dashboardData: {
        totalCourse,
        totalearnings,
        enrollStudentData
      }
    });

  } catch (err) {
    console.error("Dashboard Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
}




//Get enrolled student data with purchase data
export async function GetEnrollStudentData(req,res){
try{
   const educator = req.educatorId
  const courses=await Course.find({educator})
  const courseIds=courses.map(course=>course._id)
  const purchases=await Purchase.find({
    courseId:{$in:courseIds},
    status:"completed"
  }).populate("userId", "name imageUrl")
    .populate("courseId", "courseTitle")  //populate when the courseId only content mongodb id(types:ObjectId) it actual give the document from the reffrence
  const enrolledStudents=purchases.map(purchase=>({
    student:purchase.userId,
    courseTitle:purchase.courseId.courseTitle,
    purchaseDate:purchase.createdAt
  }))
  res.json({success:true,enrolledStudents})
}
catch(error){
res.status(404).json({success:false,message:error.message})
}
}

