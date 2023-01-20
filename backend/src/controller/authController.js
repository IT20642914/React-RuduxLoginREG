const User = require("../models/users");
const bcrypt = require("bcrypt");
const cookiePraser= require("cookie-parser");
const Users = require("../models/users");
const { where } = require("../models/users");
const  {createTokens, validateTokens}= require("../JWT");

//login
const handleLogin = async (req,res) => {

      const {email,password}=req.body;
     
      if(!email||!password) return res.status(400).json({ 'message': 'Username and password are required.' });
    

         const user= await Users.findOne({email:email});
     console.log(user);
     if(!user)  return res.status(400).json({error:"User Doesn't Exist"});


     const DbPassword= user.password;
    
     bcrypt.compare(password,DbPassword).then((match)=>{
        if(!match){
            res.status(400).json({error:"Wrong Email and password combination"});
        }else{

            const accsessToken= createTokens(user);

       


        return  res.status(200).json({ 'success': `User ${user.firstname} is logged in!` ,accsessToken});
       
        }

     })  
}

//Registation
const handleRegistation= async (req,res)=>{
  
    const username=req.body.username;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const phoneNumber = Number(req.body.phoneNumber);
      const password = await bcrypt.hash (req.body.password,10);
      const newuser = new User({firstname,lastname,email,phoneNumber,password,username
    });
    const user= await Users.findOne({email:email})
    const user2= await Users.findOne({username:username})
    if(!user){
     
      if(!user2){
            newuser.save().then(()=>{
          res.json("USER REGISTERD");
      
        }).catch((err)=>{
          if(err){
            res.status(400).json({error:err});
          }
        })
          }else{
            res.json("username is alredy used")
          }
    }else{
        res.json("email adress is alredy used")
    }
}

const view= async(req,res)=>{

    User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { handleLogin ,handleRegistation,view};