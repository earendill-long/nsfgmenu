const University = require('../modells/University')

//show the list of Empoyees
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
    Employee.findById(universityID)
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

//add new employy
const store = (req, res, next) =>{
    let university = new University({
        university: req.body.university,
    })

    if(req.files){
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
//        employee.avatar = path
    }

    university.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully'
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
    let universityID = req.body.employeeID
    University.findOneAndRemove(employeeID)
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