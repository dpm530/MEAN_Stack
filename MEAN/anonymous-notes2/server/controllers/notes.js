
//Notes Controller
//import mongoose so you can then import the model
// const bcrypt = require('bcryptjs') //be sure to NPM install
const mongoose = require('mongoose') 
const Note = mongoose.model('Note') //model being imported
const User = mongoose.model('User') //model being imported

class NotesController{
    dashboard(req, res) {
        Note.find({}, (err, notes) => {
            if(err){
                return res.json(err)
            } 
            return res.json(notes)
        })
    }

    create(req, res){
        console.log(req.body)
        Note.create(req.body, (err, note) => {
            if(err){
                return res.json(err)
            }
            //look up user
            User.findByIdAndUpdate(req.body.user, { $push: { notes: note._id } }, (err, user) =>{
                if(err){
                    return res.json(err)
                }
                return res.json(note)
            })
        })
    }

    destroy(req, res) {
       Note.findByIdAndRemove(req.params.id, (err, note) => {
            if(err){
               return res.json(err)               
            }
            User.findByIdAndUpdate(note.user, { $pull: { notes: note._id } }, (err, user) =>{
                if(err){
                    return res.json(err)
                }
                return res.json({'success': 'successfully deleted note'})
            }) 
       })
    }
} 
 module.exports = new NotesController()


