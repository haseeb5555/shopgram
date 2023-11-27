import mongoose  from "mongoose";


export const userSchema =  new mongoose.Schema({
  id :{type:String, required:true},
  username :{type:String, required:true, unique:true},
  name:{type:String, required:true},
  bio :String,
  image:String,
   posts:[

    {
    type:  mongoose.Schema.Types.ObjectId,
    ref:"Post"

    }
   ],
   products:[
    {
    type:  mongoose.Schema.Types.ObjectId,
    ref:"Product"

    }
   ],

   messages:[
      {
      type:  mongoose.Schema.Types.ObjectId,
      ref:"Message"
      
      }
   ]
,
   onboarded:{
    type:Boolean,
    default:false
   }
})

const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;