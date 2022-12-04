const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {
        type : String,
        required : "Email is required"
    },
    password : {
        type : String,
        required : "Password is required"
    }
})
const User = mongoose.model('User', UserSchema)

module.exports = User;