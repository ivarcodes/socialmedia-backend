import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
conversationid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"conversation",
    required:true
},
senderid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},
text:{
    type:String,
    required:true
},


},{timestamps:true})



export const message = mongoose.model("message",messageSchema)