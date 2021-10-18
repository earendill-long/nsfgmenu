const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeShema = new Schema({
    name:{
        type: String
    },
    designation:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    age:{
        type: Number
    },
    avatar:{
        type: String
    }
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeShema)
module.exports = Employee