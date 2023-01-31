
const bcrypt = require("bcrypt");
const cookiePraser= require("cookie-parser");
const Users = require("../models/users");

import generateTokens from "../JWT/generateTokens";

import {
	signUpBodyValidation,
	logInBodyValidation,
} from "../utils/validationSchema";

//login
const handleLogin = async (req,res) => {
  try{

      const {email,password}=req.body;
      const { error } = logInBodyValidation(req.body);
      if (error)
        return res
          .status(403)
          .json({ error: true, message: error.details[0].message });
  
    

         const user= await Users.findOne({email:email});
;
     if(!user)  return res.status(400).json({error:"User Doesn't Exist"});


     const DbPassword= user.password;
    
     bcrypt.compare(password,DbPassword).then(async(match)=>{
        if(!match){
            res.status(401).json({error:"Wrong Email and password combination",
          message:"Wrong Email and password combination"});
        }else{

            const { accessToken, refreshToken } = await generateTokens(user);
            const userName=user.username;
           
            const role=user.roles;
            res.status(200).json({
                error: false,
                accessToken,
                refreshToken,
                userName,role,
                message: `${user.username} Logged in sucessfully`,
            });


      
        }
     })  }catch(err){
      console.log(err);
      res.status(500).json({ error: true, message: "Internal Server Error" });
     }
}

//Registation
const handleRegistation= async (req,res)=>{
  
  try {

		const { error } = signUpBodyValidation(req.body);
		if (error)
			return res
				.status(403)
				.json({ error: true, message: error.details[0].message });



     const username=req.body.username;
    //  const firstname = req.body.firstname;
    //   const lastname = req.body.lastname;
       const email = req.body.email;
    //   const phoneNumber = Number(req.body.phoneNumber);
     
      const password = await bcrypt.hash (req.body.password,10);
      const newuser = new Users({...req.body,password});
    
    const user= await Users.findOne({email:email})
    const user2= await Users.findOne({username:username})
    if(!user){
     
      if(!user2){
            newuser.save().then(()=>{
          res.status(200).json(`User Registerd Successfully`);
      
        }).catch((err)=>{
          if(err){
            res.status(400).json({error:err});
          }
        })
          }else{
            res.status(401).json("username is alredy used")
          }
    }else{
        res.status(401).json("email adress is alredy used")
    }
  }catch(err){
    console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}


const GetRefeshtoken=async()=>{
  console.log("hello get token")

  
}

module.exports = { handleLogin ,handleRegistation,GetRefeshtoken};