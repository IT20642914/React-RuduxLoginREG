const router = require("express").Router();
const User = require("../models/users");
//let user = require("../models/users");



//adding users            
//http://localhost:9090/user/add
router.route("/add").post((req, res) => {

    const firstname = req.body.firstname;
    const lastname= req.body.lastname
    const email = req.body.email;
    const phoneNumber = Number(req.body.phoneNumber);
    const password = req.body.password;


    const newuser = new User({
        firstname,
        lastname,
        email,
       phoneNumber,
        password
    })


    //save user and return json
    

    newuser.save().then(() => {
        res.json(newuser._id)
        console.log(newuser._id)
    }).catch((err) => {
        console.log(err);
    })
})


//viewall
router.route("/").get((req, res) => {

   User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err);
    })


})

//update

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;

    const {  name, email, address, phoneNumber, password } = req.body;


    const updateUser = {
        firstname,
        lastname,
        email,
        phoneNumber,
        password
    }
    const update = await User.findByIdAndUpdate(userId, updateUser).then(() => {
        res.status(200).send({ status: "User updated", user: update })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating Data ",
            error: err.massage
        })

    })


})

//http://localhost:9090/User/delete/631218392a59d3d1790a6059
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "User deleted" });

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.massage });
    })



})

/


router.route("/auth").get(async(req,res)=>{
    let userEmail =req.body.email
    let userpassword= req.body.password
    const user= await User.findOne({email:userEmail})
    .then((user)=>{
        if(user.password==userpassword){res.status(200).send({ status: "User find",user });}
        else{
            res.status(200).send({ status: "User not find", });
        }

        
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get email user", error: err.massage });
    })
})



// router.get('/signup',(req,res)=>{
//     res.send("hello");
// });

// router.post('/signup',(req,res)=>{
//     var {name,email,password}=req.body
//     console.log(req.body)
//     if(!email || !password || !name)
//     {
//         return res.status(422).json({error:"Add all data"})
//     }
//     User.findOne({email:email})
//    .then((savedUser)=>{
//        if(savedUser){
//             return res.status(422).json({error:"User already exists with that email"})
//        }
//        const user=new User({
//         email,
//         password,
//         name,
//     })
//     user.save()
//     .then((user)=>{
//         res.json({message:"Saved Successfully"})
//         console.log(user.email)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
// })


module.exports = router;
