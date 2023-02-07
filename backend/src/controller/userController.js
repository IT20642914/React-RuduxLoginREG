const bcrypt = require("bcrypt");
const cookiePraser= require("cookie-parser");
const Users = require("../models/users");
import { response } from "express";
import jwt_decode from "jwt-decode";
import generateTokens from "../JWT/generateTokens";
import verifyRefreshToken from "../jwt/verifyRefreshToken";

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
      

      
      try {

           
            const  refreshToken=req.body.data.jwtrefesh;
             await verifyRefreshToken(refreshToken);
         
            const decoded = jwt_decode(refreshToken);
             console.log("Requestdate",decoded)

            const user= await Users.findOne({username:decoded.username})
            const { accessToken } = await generateTokens(user);
            const userName=user.username;  
            const role=user.roles;
            res.status(200).json({
                  error: false,
                  accessToken,
                  userName,role,
                  message: `refresh values`,
              });
            
      } catch (error) {
            // if(error.message="")


            if(error.message="Invalid refresh token"){
                  res.status(411).json({
                        message: `Invalid refresh token`,
                    });
            }
          
            
      }
 

      

}
module.exports = {Home,Homeuser,UserDetails,refeshtoken};