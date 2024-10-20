// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(
//             `${process.env.MONGODB_URI}/videotube`
//         );
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("MONGODB connection error", error,message);
//         process.exit(1);
//     }
// };

// export default connectDB;


// import mongoose from mongoose;
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import{DB_NAME} from "./constants.js";


dotenv.config({
    path:'./env'
})

connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=> {
//         console.log(`Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) =>  {
//     console.log("mongo ",err);
// })


































// first approacch for db connect

// import express from "express"
// const app = express()


// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.
//         MONDODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("error",err);
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`server started on port ${process.env.PORT}`);
//         })
//     }
//     catch (err) {
//         console.log("error",err)
//         throw err
//     }
// })()

// // function connectDB(){}

// // connectDB()