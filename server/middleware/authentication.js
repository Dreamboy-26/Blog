import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import USER from "../model/user.js"


const authentication=(req,res,next)=>{
    
    const {authorization}=req.headers
    
    if(!authorization)
    {
        return res.status(401).json({error:"login First"})
    }
    
    const token=authorization.replace("Bearer ", "")
    jwt.verify(token,"SECRET",(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error:"error "})
        }
        else{
            const {_id}=payload

            USER.findById(_id).then((userData)=>{
               req.user=userData;
               next()
            })
        }
        
    })
    
}