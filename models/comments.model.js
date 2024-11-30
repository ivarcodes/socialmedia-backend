import mongoose from "mongoose";


const CommentSchema = new mongoose.Schema({
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user",
                required:true
            },
            post:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"post"

            },
            text:{
                type:String,
                required:true
            },
            likes:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
            },
            replies:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
            }],
            createdAt:{
                type:Date,
                default:Date.now
            }

},{timestamps:true})


export const comment = mongoose.model("comment",CommentSchema);