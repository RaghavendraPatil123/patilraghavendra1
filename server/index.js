import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRouter from './routes/auth/auth.js';

const app= express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use('/vi/api/auth/',authRouter);
dotenv.config();

app.get('/',(req,res)=>{
    res.send("my life")
})

mongoose
  .connect(process.env.MONGO_URI, {
  
  })
    .then(()=>{
        console.log("connected to DB")
    })
    .catch((error)=>console.log(`${error} did not connect`));

app.listen(7500,()=>console.log("my server is running onport 7500"))