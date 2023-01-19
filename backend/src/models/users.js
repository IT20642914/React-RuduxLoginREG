const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    
    
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
        required: true
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