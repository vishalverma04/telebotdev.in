import express from 'express'
import {registerUser} from '../controllers/user.controllers.js'
import verifyOtp from '../controllers/verifyOtp.js';

const router=express.Router();

router.route('/signup').post(registerUser)
router.route('/verifyotp').post(verifyOtp)

export default router