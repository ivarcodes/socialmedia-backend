import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({
            user:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"user",
                    required:true
                }
            ],
            text:{
                type:String,
                required:true,
                default:" "
            }
            

},{timestamps:true})


export const conversation = mongoose.model("conversation",conversationSchema);