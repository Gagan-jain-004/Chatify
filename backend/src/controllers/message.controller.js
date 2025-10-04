import User from "../models/user.model.js";

export const getUsersForSidebar =async(req,res)=>{
 
    try {
        const loggedInUserId = req.user._id;                     // this req content will get by protectroute middleware
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");       // getting all user except loginned User for sidebar and not to send pass to user

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUsersForSidebar: ",error.message);
        res.status(500).json({error:"Internal Server error "})
        
    }
}