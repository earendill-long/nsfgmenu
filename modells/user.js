const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String
    },
    familia:{
        type: String
    },
    university:{
        type: String
    },
    Class:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
       
    avatar:{
        type: String
    },
    password:{
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User