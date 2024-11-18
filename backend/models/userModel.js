import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type: String,
        required : true
    },
    username:{
        type:String
    }
})