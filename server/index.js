// const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config({});

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin:'http://localhost:3000',
  credentials:true
}
app.use(cors(corsOption));

//routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
