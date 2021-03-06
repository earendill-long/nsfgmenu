const University = require('../modells/University')

//show the list of universities
const index = (req, res, next) =>{
    University.find()
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

//Show single employee
const show = (req, res, next) =>{
    let UniversityID = req.body.universityID
    University.findById(universityID)
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

//add new University
const store = (req, res, next) =>{
    let university = new University({
        university: req.body.university,
    })
    university.save()
    .then(response =>{
        res.json({
            message:'University Added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//update an employee
const update = (req, res, next) =>{
    let universityID = req.body.universityID

    let updateData = {
        university: req.body.university,
    }

    University.findByIdAndUpdate(universityID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Employee updated successfully'
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
    let universityID = req.body.universityID
    University.findOneAndRemove(universityID)
    .then(() =>{
        res.json({
            message: 'Employee deleted successfuly'
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