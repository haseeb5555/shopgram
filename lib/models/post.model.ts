import mongoose from "mongoose"


export const PostSchema = new mongoose.Schema({
    text:{type:String,required:true},
    image:String,
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    parentId:{
        type:String
    },
     children:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
     ]
})


const Post = mongoose.models.Post|| mongoose.model('Post',PostSchema);

export default Post;