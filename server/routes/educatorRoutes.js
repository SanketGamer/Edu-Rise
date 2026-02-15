import express from "express";
import {updateRollEducator,AddCourse, getEducatorCourses, educatorDashboardData, GetEnrollStudentData,GetSyllabus,BecomeStudent,GetEducatorData,Signup,Signin}
 from "../contollers/educatorcontroller.js"
import upload from "../configs/multer.js"
import { protectEducator } from "../middlewares/authMiddleware.js";
const educatorRouter=express.Router();

//Add educator
educatorRouter.get("/update-role",updateRollEducator)
educatorRouter.get("/student-role",BecomeStudent)
educatorRouter.post("/add-course",upload.single('image'),protectEducator,AddCourse)
educatorRouter.get("/courses",protectEducator,getEducatorCourses)
educatorRouter.get("/dashboard",protectEducator,educatorDashboardData)
educatorRouter.get("/enrolled-students",protectEducator,GetEnrollStudentData)
educatorRouter.get("/syllabus/:courseId",GetSyllabus)
educatorRouter.get("/educator-data",protectEducator,GetEducatorData)
educatorRouter.post("/signup",Signup);
educatorRouter.post("/signin",Signin);

export default educatorRouter;