import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        trim:true,
        lowercase:true,
        unique:true
    },
    name:{
        type:String,
        required:[true,'name is required'],
        minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    

    }

},{timestamps:true})

export const User=mongoose.model("User",userSchema)