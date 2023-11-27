import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    image:String,
    message:String,
    chatRoomId:String,
    author: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true

} ,  
  createdAt:{
    type:Date,
    default:Date.now
},

}
)

export const Message=mongoose.models.Message||mongoose.model('Message',messageSchema)