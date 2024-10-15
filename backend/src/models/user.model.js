import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        requird:true
    },
    fullName:{
        type:String,
        requird:true
    },
    password:{
        type:String,
        requird:true
    },
    bots:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Bot"
    }]
},{timestamps:true})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();
  this.password=await bcrypt.hash(this.password,10)
  next()  
})

userSchema.methods.isPasswordCorrect= async function(password){
return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    return  jwt.sign(
          {
              _id:this._id,
              email:this.email,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
              expiresIn:process.env.ACCESS_TOKEN_EXPIRY
          }
      )
  }

const User=mongoose.model("User",userSchema)
export {User}
