import {clerkClient} from "@clerk/express"
import jwt from "jsonwebtoken";
//Protect educator route that only educator can access
export async function protectEducator(req,res,next){
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        const token=authHeader.split(" ")[1];
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.educatorId=decode.educatorId;
        next();

    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

