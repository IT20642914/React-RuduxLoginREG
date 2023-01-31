const bcrypt = require("bcrypt");
const cookiePraser= require("cookie-parser");
const Users = require("../models/users");
import jwt_decode from "jwt-decode";
import generateTokens from "../JWT/generateTokens";

const Home= async(req,res)=>{

  
      res.json(`hello admin ` );

}

const Homeuser= async(req,res)=>{

   
  
      res.json(" hello user");
   
}
const UserDetails= async(req,res)=>{
      res.json("user details")
}


const refeshtoken= async(req,res)=>{
      
  const  jwtrefesh=req.body.data.jwtrefesh;
  const decoded = jwt_decode(jwtrefesh);

      console.log("Requestdate",decoded)
      const user= await Users.findOne({username:decoded.username})
      const { accessToken ,refreshToken} = await generateTokens(user);
      const userName=user.username;  
      const role=user.roles;
      res.status(200).json({
            error: false,
            accessToken,
            refreshToken,
            userName,role,
            message: `refresh values`,
        });

      

}
module.exports = {Home,Homeuser,UserDetails,refeshtoken};