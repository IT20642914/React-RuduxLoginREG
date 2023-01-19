const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserTokenSchema = new schema({

    userId:{
        type: schema.Types.ObjectId,
        required:true,
    },
    token:{
        type:String,
        required:true,

    },

    CreatedAt:{
        type:Date,
        default:Date.now,
        expires:60*60
    },
    
  


})
const UserToken= mongoose.model("UserToken", UserTokenSchema);
module.exports = UserToken;