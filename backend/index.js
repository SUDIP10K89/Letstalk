// const express = require('express');
import express from 'express'
import dotenv from "dotenv"
import connectDB from "./config/database.js";

dotenv.config({})

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})
