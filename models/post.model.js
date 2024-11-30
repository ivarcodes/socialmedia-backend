import mongoose from "mongoose";



const postSchema = new mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        caption:{
            type:String,
            trim:true
        },
        images:[
            {
                type:String,
                required:false
            }
        ],
        like:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment"
        }]



},{timestamps:true})


export const post =  mongoose.model("post",postSchema);