import {clerkClient} from "@clerk/express"

//Protect educator route that only educator can access
export async function protectEducator(req,res,next){
    try{
          const { userId } = req.auth(); 
        const response=await clerkClient.users.getUser(userId)
        if(response.publicMetadata.role !== 'educator'){
            return res.json({success:false,message:"Unauthorized Access"})
        }
        next();

    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}