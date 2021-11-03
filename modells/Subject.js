const mongoose = require('mongoose')
const Shema = mongoose.Schema

const subjectShema = new Shema({
    university:{
        type: String
    },
    subjectname:{
        type: String
    }
    }, {timestamps: true})

    const Subject = mongoose.model('Subject', subjectShema)
    module.exports = Subject
