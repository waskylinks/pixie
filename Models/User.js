const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : Number,
        required : true,
    },
    role : {
        type : String,
        enum : ['user', 'admin'],  //on;y alow user or admin roles
        default : 'user'
    }

}, {
    timestamps : true
});

module.exports = mongoose.Model('User', userSchema);