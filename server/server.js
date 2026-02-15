
import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/mongodb.js"
import {clerkWebhooks, stripeWebHooks} from "./contollers/webhooks.js"
import educatorRouter from "./routes/educatorRoutes.js"
import { clerkMiddleware } from "@clerk/express"
import connectCloudinary from "./configs/cloudinary.js"
import courseRouter from "./routes/courseRoutes.js"
import userRouter from "./routes/userRoutes.js"
import bodyParser from "body-parser"
import Course from "./models/course.js";  



const app=express()

//connection
await connectDB()
await connectCloudinary()

//middleware
app.use(cors())
app.post("/stripe", express.raw({ type: 'application/json' }), stripeWebHooks);
//app.post("/stripe", bodyParser.raw({ type: "application/json" }), stripeWebHooks);
app.post("/clerk", express.raw({ type: 'application/json' }), clerkWebhooks);
app.use(express.json()); 
app.use(clerkMiddleware())

//Routes
app.use("/api/v1/educator",educatorRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/user",userRouter)

app.get("/",function(req,res){
    res.send("Api is Working")
})
app.get("/stripe-test", (req,res) => {
  console.log("✅ Stripe test route hit");
  res.send("Stripe route works");
});


app.get("/fix-students", async (req, res) => {
  try {
    const courses = await Course.find();

    let fixed = 0;

    for (const c of courses) {
      if (!c.enrolledStudents || c.enrolledStudents.length === 0) continue;

      // Convert objects → ObjectIds
      c.enrolledStudents = c.enrolledStudents.map(s =>
        typeof s === "object" ? s._id : s
      );

      await c.save({ validateBeforeSave: false });

      fixed++;
    }

    res.json({ success: true, fixed });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});



app.listen(3000)