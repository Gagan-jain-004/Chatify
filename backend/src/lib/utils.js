import jwt from "jsonwebtoken"

export const generateToken = (userId,res)=>{                   //user id as payload to track of user 

    const token= jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,   //ms
        httpOnly:true,            //prevent scripting attacks cross-site
        sameSite:"strict",         // attacks
        secure:process.env.NODE_ENV !== "development"      // toh secure tab hogi jab production mai hogi coz as we r in localhost during dev so it wont secure it 

    })
    return token;
};



// //  Typical Flow
// 🔓 Login
// - User logs in → token is generated and stored in cookie.
// 🔄 Subsequent Requests
// - Browser sends cookie → backend verifies token → identifies user.
// ⏳ After 7 Days
// - Token expires → user must log in again → new token is issued.

//  How It’s Useful
// 1. Auto-login for 7 days
// Yes — the cookie acts like a session. As long as the token is valid:
// - The browser sends it automatically with every request.
// - Your backend reads it and knows which user is making the request.
// - No need to re-enter login credentials.
