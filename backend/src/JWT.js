const { sign, verify } = require("jsonwebtoken");
import {JWT_KEY} from "./configs";
const createTokens = (user) => {
  const accsessToken = sign({ email: user.email ,username:user.username,role:user.role,},JWT_KEY);
  //refesh tokens add krnn puuwan
  return accsessToken;
};

const validateTokens=(req,res,next)=>{
    const accsessToken= req.cookies["access-token"]
   
    if(!accsessToken) return res.status(400).json({error:"User Not Authenticated !"});
    try{
    const validToken=verify(accsessToken,JWT_KEY);
        if(validToken) {
                req.authenticated=true
                return next();
        }
    }catch(err){
        return res.status(400).json({error:err}) 
    }

}

const authRole=(req,res,next)=>{



}
module.exports = { createTokens,validateTokens,authRole };
