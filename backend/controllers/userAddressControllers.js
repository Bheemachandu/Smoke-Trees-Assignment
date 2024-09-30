import Address from "../models/address.js"
import User from "../models/user.js"
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

export const updateUserAndAddress=catchAsyncErrors(async (req,res)=>{


    const {name,address} = req.body

    let duplicateUser=await User.find({"name":name})


    let userId=""
    if (!duplicateUser[0]){
        // if the user is not there in user table then create user in user table and take the  id of newly created data in user table.
        const user=await User.create({
            name,
        })
        userId=user._id
    }
    else{
        // if user is there in user table then take the id of that user and use it in address table
        userId=duplicateUser[0]._id
    }
    


    const userAddress=await Address.create({
        userId,
        address,
    })

    res.status(200).json({
        message:"bheemchand"
    });
});




