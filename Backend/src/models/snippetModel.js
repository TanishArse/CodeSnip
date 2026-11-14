import mongoose from 'mongoose';
import { LANGUAGES } from '../constants.js';

const snippetSchema = new mongoose.Schema({

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },

    title:{
        type:String,
        trim:true,
        required:true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    code:{
        type:String,
        required:true,
        maxlength:[50000, 'Snippet is too large'],
       
        
    },
    language:{
        type:String,
        enum:LANGUAGES,
        required:true
    },
    tags: {
      type: [{ type: String, trim: true, lowercase: true }],
      default: [],
      validate: [(arr) => arr.length <= 10, 'Max 10 tags'],
    },
  },{timestamps:true});

  snippetSchema.index({ owner: 1, title: 1 }, { unique: true });
export const Snippet =mongoose.model("Snippet",snippetSchema)