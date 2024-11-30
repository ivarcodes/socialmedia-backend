import express from 'express';
import dotenv from 'dotenv';
import router from '../socialmedia/routes/auth.js';
import databaseConnection  from '../socialmedia/database/db.js'
dotenv.config();

const port = process.env.PORT || 5001;
const app = express();
databaseConnection();
app.use(express.json());
app.use("/api",router);


app.listen(port,()=>{
    console.log("Server running on port ",port)
})