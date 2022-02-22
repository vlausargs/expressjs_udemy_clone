const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true,
        trim:true,
        minlength: 3 
    },
    password: {
        type:String,
        required:true,
        select: false,
        minlength: 6
    },
    name: {
        type:String,
        required:true,
    }

},{timestamps:true,})

module.exports = mongoose.model('users',UserSchema);