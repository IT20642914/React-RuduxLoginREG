const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    
    username:{
        type: String,
        required: true,
        unique:true,
      
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        required: true,
        unique:true,
    },
   
    phoneNumber: {

        type: Number,
        required: true

    },
    password: {
        type: String,
        required: true
    }, 
     joined: {
         type: Date, 
         default: Date.now 
        },
    
        roles: {
            type: [String],
            enum: ["user", "admin", "super_admin"],
            default: ["user"],
        },


})
const Users= mongoose.model("Users", UserSchema);
module.exports = Users;