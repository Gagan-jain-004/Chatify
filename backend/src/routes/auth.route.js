import express from "express"

const router = express.Router()

router.post("/signup",(req,res)=>{
    res.send("signup router")
})

router.post("/login",(req,res)=>{
    res.send("login router")
})

router.post("/logout",(req,res)=>{
    res.send("logout router")
})



export default router;