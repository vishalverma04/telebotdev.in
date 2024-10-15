import { User } from "../models/user.model.js";
import { redisClient } from "../db/redis.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { Apierror } from "../utils/Apierror.js";

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    const userData = await redisClient.get(`otp:${email}`);
    if (!userData) {
      return res.status(400).json({ message: 'OTP expired or invalid. Please request a new one.' });
    }

    const { otp: storedOtp, fullName, password } = JSON.parse(userData);

    if (otp !== storedOtp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    const user=await User.create({
        email,
        fullName,
        password
    })
     if(!user){
        throw new Apierror(500,"something went wrong while registering the user")
     }
     
     await redisClient.del(`otp:${email}`);

     return res.status(201).json(
        new ApiResponse(200, user, "User registered Successfully")
     )
}
  
export default verifyOtp;