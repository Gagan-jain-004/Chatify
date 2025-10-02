import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"


export const signup = async(req,res)=>{
    // extract data from body 
    const {fullName,email,password}=req.body;

    try{ 

        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 characters"});

        }

        //check if user already exist 
        const user = await User.findOne({email})
        if(user) return res.status(400).json({message: "Email already exists"});

        // if not exist then 
        
      //10 is generated salt  , bcrypt:- Extracts the salt from storedHash- Re-hashes password using that same salt and cost- Compares the result with the stored hash If they match → ✅ password is correct.

        const hashedPassword= await bcrypt.hash(password,10)

        const newUser = new User({
            fullName:fullName,            // as both is same so we can just write it as fullName, eg see below email
            email,
            password: hashedPassword,
        })

        if(newUser){
            // generate jwt token here (fxn in utils)

          const token=  generateToken(newUser._id,res)
            await newUser.save();

            res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
            })

        }else{
            res.status(400).json({message:"Invalid user data"}); 
        }

    }catch(error){
            console.log("Error in signup controller",error.message);
            res.status(500).json({message:"Internal Server Error"});
    }

};

export const login = async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email})
       
        if(!user) return res.status(400).json({message:"Invalid Credentials"});
        
        const isPasswordCorrect =await bcrypt.compare(password,user.password)
       
        
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        // so  as it get logined so send new token 

    const token= generateToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
        });
    
    }catch(error){
        console.log("Error in login controller",error.message);
        res.status(500).json({message:"Internal Server Error"})
    }

};


export const logout = (req,res)=>{
    
    try{
        res.cookie("jwt","",{maxAge:0})                   // jwt set to empty ""
        res.status(200).json({message:"Logged out successfully"})

    }catch(error){
        console.log("Error in Logout Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }

};

export const updateProfile = async(req,res)=>{

    try{
        const {profilePic} = req.body;
        const userId = req.user._id;              //this get via token becoz of protect route (see last line of protectroute)
        
        if(!profilePic){
            return res.status(400).json({message: "Profile pic is required"});
        }
        
        const uploadResponse =await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(
            userId,                                            // finding user by id in db 
            {profilePic: uploadResponse.secure_url},          //cloudinary way of uploadresponse in mongodb
            {new:true}      // this updated the updated details in dba
        );

        res.status(200).json(updatedUser);

    }catch(error){
        console.log("error in update profile: ",error.message);
        res.status(500).json({message: "Internal Server error"})
    }


};


export const checkAuth = (req,res)=>{

    try{
        res.status(200).json(req.user);

    }catch(error){
        console.log("Error in checkAuth controller",error.message);
        res.status(500).json({message:"Internal  Server Error"});
    }

}