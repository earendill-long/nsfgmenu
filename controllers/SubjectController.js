const Subject = require('../modells/Subject')

//show the list of subject
const index = (req, res, next) =>{
    Subject.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

//Show single subject
const show = (req, res, next) =>{
    let SubjectID = req.body.subjectID
    Subject.findById(subjectID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
       res.json({
        message: 'An error Occured'
       })
    
    })
}

//add new subject
const store = (req, res, next) =>{
    let subject = new Subject({
        university: req.body.university,
        subjectname: req.body.subjectname
    })
    if(subject.university == null){
        res.json({
            message:'...'
        })
    }
    if(subject.subjectname == null){
        res.json({
            message:'...'
        })
    }
    else{
        subject.save()
        .then(response =>{
            res.json({
                message:'subject Added Successfully'
            })
        })
        .catch(error =>{
            res.json({
                message:'An error Occured'
            })
        })
    }
 
}

//update an employee
const update = (req, res, next) =>{
    let subjectID = req.body.subjectID

    let updateData = {
        subject: req.body.subject,
    }

    Subject.findByIdAndUpdate(subjectID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'subject updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//delete an employee
const destroy = (req, res, next) =>{
    let subjectID = req.body.subjectID
    Subject.findOneAndRemove(subjectID)
    .then(() =>{
        res.json({
            message: 'subject deleted successfuly'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}