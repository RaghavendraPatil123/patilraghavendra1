import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRouter from './routes/auth/auth.js';
dotenv.config();
const app = express();
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
    res.send("my life")
})
app.use('/v1/api/auth', authRouter);

mongoose
    .connect(process.env.MONGO_URI, {

    })
    .then(() => {
        console.log("connected to DB")
    })
    .catch((error) => console.log(`${error} did not connect`));

app.listen(7500, () => console.log("my server is running onport 7500"))