const bcrypt = require("bcrypt");
const cookiePraser= require("cookie-parser");
const Users = require("../models/users");

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
     console.log("reqsed data",req.data)

}
module.exports = {Home,Homeuser,UserDetails,refeshtoken};