import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,

    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    bio:{
        type:String,
        trim:true
    },
    profilepic:{
        type:String,
        default:""
    },
    coverpic:{
        type:String,
        default:""
    },
    posts:{
        type:[
            {
               type:mongoose.Schema.Types.ObjectId,
               ref:"post" 
            }
        ]
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
    ,
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    blocklist:{
        type:Boolean,
        default:false
    }
},{timestamps:true})



export const user  = mongoose.model("user",userSchema);