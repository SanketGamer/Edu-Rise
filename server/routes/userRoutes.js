import express from "express"
import { GetCourseLink, getUserCourseProgress, GetUserData, purchaseCourse, updateCourseProgress ,UpdateStudentUserData} from "../contollers/userController.js";
const userRouter=express.Router()

userRouter.get("/data", GetUserData);
userRouter.get("/enrolled-courses", GetCourseLink);
userRouter.post("/purchase", purchaseCourse);
userRouter.post("/update-course-progress",updateCourseProgress)
userRouter.get("/get-course-progress",getUserCourseProgress)
userRouter.get("/update-student",UpdateStudentUserData)



export default userRouter;