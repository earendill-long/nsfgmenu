const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required : [true,'Укажите имя']
    },
    familia:{
        type: String,
        required: [true, 'Укажите фамилию']
    },
    university:{
        type: String,
        required : [true, 'Укажите учебное заведение']
    },
    Class:{
        type: String,
        required: [true, 'Укажите группу']
    },
    email:{
        type: String,
        required: [true, 'Укажите почтовый ящик']
    },
    phone:{
        type: String,
        required: [true, 'Укажите телефон']
    },
       
    avatar:{
        type: String
    },
    password:{
        type: String,
        required: [true, 'Укажите пароль']
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User