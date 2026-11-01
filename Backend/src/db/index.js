import mongoose from "mongoose";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import {DB_NAME} from "../constants.js";

const connectDB= async()=>{
    try{ const connection_instance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log("DB connected")

    }
    catch(error){
        console.log("MONGO DB CONNECTION ERROR,",error)
    }
   
}
export default connectDB
