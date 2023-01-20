const router = require("express").Router();
const authController= require("../controller/authController")
const  {createTokens, validateTokens,authRole}= require("../JWT");
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";




router.post('/login',authController.handleLogin)
router.post('/register',authController.handleRegistation)
router.get('/',authController.view)







// router.route("/register").post(async(req, res) => {
//   const username=req.body.username;
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const email = req.body.email;
//   const phoneNumber = Number(req.body.phoneNumber);
//   const password = await bcrypt.hash (req.body.password,10);
//   const newuser = new User({firstname,lastname,email,phoneNumber,password,username
// });
// const user= await Users.findOne({email:email})
// const user2= await Users.findOne({username:username})
// if(!user){
 
//   if(!user2){
//         newuser.save().then(()=>{
//       res.json("USER REGISTERD");
  
//     }).catch((err)=>{
//       if(err){
//         res.status(400).json({error:err});
//       }
//     })
//       }else{
//         res.json("username is alredy used")
//       }
// }else{
//     res.json("email adress is alredy used")
// }
// });



// //userLogin
// router.route("/login").post(async(req,res)=>{
//     const {email,password}=req.body;

//      const user= await Users.findOne({email:email});
//      console.log(user);
//      if(!user) res.status(400).json({error:"User Doesn't Exist"});
//      const DbPassword= user.password;
    
//      bcrypt.compare(password,DbPassword).then((match)=>{
//         if(!match){
//             res.status(400).json({error:"Wrong Email and password combination"});
//         }else{

//             const accsessToken= createTokens(user);
//             res.cookie("access-token",accsessToken,{maxAge:60*60*1000,
//             httpOnly:true,});
//          res.status(200).json({ 'success': `User ${user.firstname} is logged in!` });
       
//         }

//      })
// })


//userLogin





//viewall
// router.route("/").get(validateTokens,(req, res) => {
//   User.find()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }); 


 module.exports = router;