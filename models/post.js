import mongoose from "mongoose";

const postSchema = mongoose.schema(
    {
        userId:{
            type : String,
            required : true,
        },
        firstName:{
            type : String,
            required : true,
        },
        lastName:{
            type : String,
            required : true,
        },
        location : String,
        description : String,
        picturePath : String,
        userPicturePath : String,
        like : {
            type : map, 
            of : Boolean,
        },
        comments : {
            type : Array,
            default : []
        }
    },
    {timestamps: true}

);
const Post = mongoose.model("Post", postSchema);

export default Post;