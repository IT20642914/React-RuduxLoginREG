const { sign, verify } = require("jsonwebtoken");
import config from "./configs";
const createTokens = (user) => {
  const accsessToken = sign({ email: user.email }, config.JWT_KEY);
  //refesh tokens add krnn puuwan

  return accsessToken;
};
const validateTokens=(req,res,next)=>{
    const accsessToken= req.cookies["access-token"]
   
    if(!accsessToken) return res.status(400).json({error:"User Not Authenticated !"});
    try{
    const validToken=verify(accsessToken,config.JWT_KEY);
        if(validToken) {
                req.authenticated=true
                return next();
        }
    }catch(err){
        return res.status(400).json({error:err}) 
    }

}
module.exports = { createTokens,validateTokens };
