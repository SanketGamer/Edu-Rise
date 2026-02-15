    import mongoose from "mongoose"

    const educatorSchema=new mongoose.Schema({
        // _id:{
        //     type:String,
        // },
        name:{type:String},
        email:{type:String,required: true,},
        password:{ type:String,required:true},
       role: {type: String, default: "educator", enum: ["educator"], },
        imageUrl:{
            type:String,
            required: true,
        },
       enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]

    },{timestamps: true })

    const Educator=mongoose.model("Educator",educatorSchema)

    export default Educator;    