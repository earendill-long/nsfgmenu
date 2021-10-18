const Employee = require('../modells/Employee')

//show the list of Empoyees
const index = (req, res, next) =>{
    Employee.find()
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
    let EmployeeID = req.body.employeeID
    Employee.findById(employeeID)
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
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })

    if(req.files){
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        employee.avatar = path
    }

    employee.save()
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
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
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
    let employeeID = req.body.employeeID
    Employee.findOneAndRemove(employeeID)
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