import mongoose from 'mongoose'

const botSchema=new mongoose.Schema({
   botName: {
    type: String,
    required: true,
  },
  botToken: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    enum: ['free', 'basic', 'premium'],
    default: 'free',
  },
  

},{timestamps:true})

const Bot=mongoose.model("Bot",botSchema)
export {Bot}