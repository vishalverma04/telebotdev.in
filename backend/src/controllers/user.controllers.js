import { Apierror } from "../utils/Apierror.js";
import { asyncHander } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { redisClient } from "../db/redis.js";
import sendOtpEmail from "./email.controllers.js";

const registerUser= asyncHander(async (req,res)=>{
try {
    
         const {fullName,email,password}=req.body
         if(
            [fullName,email,password].some((field)=>{
                 field === "";
            })
         ){
               throw new Apierror(400,"all entry are required")
         }
         const existedUser=await User.findOne({email})
         if(existedUser){
            throw new Apierror(409,"user already existed")
         }
    
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = 600; 
    
        await redisClient.setEx(`otp:${email}`, otpExpiresAt, JSON.stringify({ otp, fullName, email, password }));
    
        await sendOtpEmail(email, otp);
        
         return res.status(201).json(
            new ApiResponse(200, `OTP sent to your email ${email}`)
         )
} catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
}

});

export {registerUser}