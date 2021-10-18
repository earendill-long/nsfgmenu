const User = require('../modells/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10,  function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        user.save()
        .then(user =>{
            res.json({
                message:'User Added Successfuly'
            })
        })
        .catch(error =>{
            res.json({
                message:"An error"
            })
        })
    })

}

const login = (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'thesecrettoken', {expiresIn: '1h'})
                    let refreshtoken = jwt.sign({name: user.name}, 'refreshtokensecret', {expiresIn: '60s'})
                    res.status(200).json({
                        message: 'Login Successful',
                        token,
                        refreshtoken
                    })
                }else{
                    res. status(200).json({
                        message: 'Password does not matched'
                    })
                }
            })
        }else{
            res.json({
                message:'No user found'
            })
        }
    })
}

const refreshtoken = (req, res, next) =>{
    const refreshtoken = req.body.refreshtoken
    jwt.verify(refreshtoken, 'refreshtokensecret', function(err, decode){
        if(err){
            res.status(400).json({
                err
            })
        }else{
            let token = jwt.sign({name: decode.name}, 'thesecrettoken', {expiresIn: '60s'})
            let refreshtoken = req.body.refreshtoken
            res.status(200).json({
                message: 'Token refreshed succesfuly',
                token,
                refreshtoken
            })
        }
    })
}


module.exports = {
    register, login, refreshtoken
}