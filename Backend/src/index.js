import connectDB from "./db/index.js"

import app from "./app.js";
const PORT=process.env.PORT||5000;

const startServer=async()=>{
    await connectDB();

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)    })
}
startServer();