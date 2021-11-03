const mongoose = require('mongoose')
const Shema = mongoose.Schema

const workShema = new Shema({
    subjectName:{
        type: String
    },
    workName:{
        type: String
    },
    workType:{
        type: String
    },
    discriptions:{
        type: String
    }
}, {timestamps: true})

const Work = mongoose.model('Work', workShema)
module.exports = Work