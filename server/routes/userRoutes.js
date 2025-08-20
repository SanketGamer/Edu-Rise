import express from "express"
import { GetCourseLink, GetUserData, purchaseCourse } from "../contollers/userController.js";
const userRouter=express.Router()

userRouter.get("/data", GetUserData);
userRouter.get("/enrolled-courses", GetCourseLink);
userRouter.post("/purchase", purchaseCourse);

export default userRouter;