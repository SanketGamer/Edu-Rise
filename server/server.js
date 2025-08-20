
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

const app=express()

//connection
await connectDB()
await connectCloudinary()

//middleware
app.use(cors())
app.use(express.json()); 
app.use(clerkMiddleware())

//Routes
app.post("/clerk",clerkWebhooks)
app.post("/stripe",express.raw({type: 'application/json'}),stripeWebHooks)
app.use("/api/v1/educator",educatorRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/user",userRouter)

app.get("/",function(req,res){
    res.send("Api is Working")
})

app.listen(3000)