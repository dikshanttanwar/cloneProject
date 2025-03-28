// require("dotenv").config({path:"./env"});
// it still work properly with require, but we are not using it because of proper flow, jaise ek baar req fir import, nahi saara ek jaisa

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./env"
});

connectDB();

// This is First approach to connect DB, directly in the index file,
// In Second approach we create a file in DB folder & write the logic there and then import it here
/*import express from "express";
const app = express();
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.error("Errrr:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port number ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:",error);
        throw error;
    }
})()*/
