import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async(req,res,next)=>{

    try{

        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({message: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({message:"Unauthorized - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password")    // returning to client everything except password

        if(!user){
            return res.status(404).json({message: "User not found"});
        }     

        // so above return nhi hua so user is authenticate , add user to request
        req.user = user
        next()          // calls the next fxn prsnt aftr protectRoute

    }catch(error){
        console.log("Error in protectRoute middlewarre:",error.message);
        res.status(500).json({message:"Internal Server error"})
    }

}