import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();



const databaseConnection  = async ()=>{
    try{
      await  mongoose.connect(process.env.URI);
        console.log("Connected to db");
    }
    catch(error){
        console.error("Error while connecting",error)
        process.exit(1);
    }
}





export  default databaseConnection;