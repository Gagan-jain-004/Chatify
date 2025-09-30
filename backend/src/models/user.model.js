import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true,
    },

    fullName:{
        type:String,
        requried:true,
    },

    password:{
        type:String,
        require:true,
        minlength:6,
    },

    profilePic:{
        type:String,
        default:"",             // default is used as it's not required if user uploads then it gets updated 
    },

},{timestamps:true}
);


const User= mongoose.model("User",userSchema);       //so in compass u see name inside of " " as dbfolder name there

export default User;



