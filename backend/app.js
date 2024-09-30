import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js"

import express from "express";
const app=express()

import dotenv from "dotenv"
dotenv.config({path:"backend/config/config.env"});

// Connecting to Database
connectDatabase()

app.use(express.json());


// Import all routes
import userAddressRoutes from "./routes/usersAddress.js";



app.use("/api/",userAddressRoutes)

//Using error midddleware
app.use(errorMiddleware);

app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});