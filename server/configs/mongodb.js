import mongoose from "mongoose"

const connectDB=async function(){
    mongoose.connection.on("connected",function(){
        console.log("database Connnected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/EduRise`)

}

export default connectDB