import mongoose from "mongoose";

export const connectDatabase = () => {

    let DB_URI=""

    if (process.env.NODE_ENV.trim() === "DEVELOPMENT") DB_URI=process.env.DB_LOCAL_URI
    if(process.env.NODE_ENV.trim() === "PRODUCTION") DB_URI=process.env.DB_URI
    console.log(DB_URI)

    mongoose.connect(DB_URI).then((con) => {
        console.log(`mongoDB Database connected with Host :${con?.connection?.host}`)
    })
}