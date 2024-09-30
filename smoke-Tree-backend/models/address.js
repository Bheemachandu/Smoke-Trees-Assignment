import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:[true, "Please enter user address"]
    },
}, {timestamp :true});


export default mongoose.model("Address",addressSchema);