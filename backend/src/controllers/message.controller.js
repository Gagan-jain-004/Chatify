import User from "../models/user.model.js";
import Message from "../models/message.model.js"

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


export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;            //this id is from route ,  params is route parameter (go see route has id added in route when u click on of specif chat of user that person id get to route then we fetch details 
        const myId = req.user._id;

        const messages= await Message.find({                     // find those message the one is sent to selected user and that user to me 
            $or:[
                {senderId: myId,receiverId: userToChatId},
                {senderId: userToChatId , receiverId: myId},
            ],
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500),json({error: "Internal server error"});
        
    }
}

export const sendMessage =async(req,res)=>{

    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            //if image given by user then Upload image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        // message creation
        const newMessage= new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });
        
        await newMessage.save();

        // todo: realtime functionaliy by socket.io
        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error: "Internal server error"});
        
    }

}