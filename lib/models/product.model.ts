import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    quantity:String,
    price:{type:String,required:true},
    image:String,
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

export const Product=mongoose.models.Product||mongoose.model('Product',productSchema)