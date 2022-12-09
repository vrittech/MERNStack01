const mongoose = require("mongoose");
const { ADMIN, USER } = require("../constants/roles");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email : {
        type : String,
        required : "Email is required"
    },
    password : {
        type : String,
        
    },
    role : {
        type : String,
        enum : [ADMIN, USER],
        default: USER,
        required : "Role is required"
    },
    googleLogin : {
        type: Boolean
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;