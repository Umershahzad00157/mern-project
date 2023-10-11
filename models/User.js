import mongoose from "moongose";
const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type : string,
            required : true,   
            min : 2,
            max : 50 ,   
         },
         lastName : {
            type : string,
            required : true,   
            min : 2,
            max : 50 ,   
         },
         email : {
            type : string,
            required : true,   
            max : 50 ,  
            unque: true 
         },
         password : {
            type : string,
            required : true,   
            max : 5 ,     
         },
         picturePath : {
            type : string,
            default : "",
        },
        friends:{
            type : Array,
            default: []
        },
        location: String,
        occupation : String,
        viewedProfile: Number,
        impressions : Number,
    },{timestamps: true}
     );

     const User = mongoose.model("User" , UserSchema)
     export default User;