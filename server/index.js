import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import  path from "path";
import productsRouter from './routes/products.js'
dotenv.config();
const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use('/',productsRouter)


app.get('/',(req,res)=>{
    res.send("chander reddy")
})

mongoose
  .connect(process.env.MONGO_URI, {
  
  })
  .then(() => {
    console.log("connected to DB")
   // app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
   
 app.listen(7000,()=>console.log("my server is running onport 7000"));

