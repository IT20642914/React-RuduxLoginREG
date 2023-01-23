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
module.exports = {Home,Homeuser};