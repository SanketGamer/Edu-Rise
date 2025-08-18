
import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/mongodb.js"
import {clerkWebhooks} from "./contollers/webhooks.js"

const app=express()

app.use(cors())
await connectDB()

app.post("/clerk",express.json(),clerkWebhooks)

app.get("/",function(req,res){
    res.send("Api is Working")
})

app.listen(3000)