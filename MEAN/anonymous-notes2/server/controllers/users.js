
//Users Controller
//import mongoose so you can then import the model
// const bcrypt = require('bcryptjs') //be sure to NPM install
const mongoose = require('mongoose') 
const User = mongoose.model('User') //model being imported


class UsersController{
    dashboard(req, res) {
        User.find({}, (err, user) => {
            if(err){
                return res.json(err)
            } 
            return res.json(user)
        })
    }

    create(req, res){
        if (req.body.password != req.body.password_confirmation){
            return res.json({
                errors: {
                    password: {
                        message: 'Your PW does not match'
                    }
                }
            })
        }
        console.log(req.body)
        User.create(req.body, (err, user) => {
            if(err){
                return res.json(err)
            }
            console.log(user)
            req.session.user_id = user._id
            return res.json(user)
            })
        }
    authenticate(req, res){
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err){
                return res.json(err)
            }
            // console.log("!!!!!!!!!!!!!!!!!!!", "@@",user.email,"@@", "!!",req.body.password,"!!")
            if(user.email == req.body.email){
                if(user.password == req.body.password){
                    req.session.user_id = user._id
                    return res.json(user)
                }                    
            }
            return res.json({
                errors: {
                    login: {
                        message: 'Invalid Credentials'
                    }
                } 
            })
        })
    }

    session(req, res) {
        if(req.session.user_id) {
            User.findById(req.session.user_id, (err, user) =>{
                if(err){
                    return res.json(err)
                }else{
                    // console.log("!!!!!!", user, "!!!!!")
                    return res.json(user)
                }
            })
        }else{
            return res.json({ status: false })
        }
    }


    logout(req, res){
        delete req.session.user_id
        return res.json({ status: true })
    }

    destroy(req, res) {
       User.findByIdAndRemove(req.params.id, (err, user) => {
            if(err){
               return res.json(err)               
            }
            return res.json({'success': 'successfully deleted user'})
        }
        )
    }
} 
 module.exports = new UsersController()