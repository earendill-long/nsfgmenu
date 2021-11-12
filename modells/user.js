const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required : [true,'...']
    },
    familia:{
        type: String,
        required: [true, '...']
    },
    university:{
        type: String,
        required : [true, '...']
    },
    Class:{
        type: String,
        required: [true, '...']
    },
    email:{
        type: String,
        required: [true, '...']
    },
    phone:{
        type: String,
        required: [true, '...']
    },
       
    avatar:{
        type: String
    },
    password:{
        type: String,
        required: [true, '...']
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User