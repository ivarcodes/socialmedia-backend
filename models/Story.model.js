import mongoose from "mongoose";



const StorySchema = new mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
       text:{
        type:String,
        required:true,
        default:""
       },
       image:{
        type:String,
        required:false
       },
       createdAt:{
        type:Date,
        default:Date.now
       }

},{timestamps:true})


export const story = mongoose.model("story",StorySchema);