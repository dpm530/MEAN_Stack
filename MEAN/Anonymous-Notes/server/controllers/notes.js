const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class NotesController {

	index(req, res) {
		Note.find({}).sort('-createdAt').exec((err, notes) => {
			if(err){
				res.json(err);
			}
			res.json(notes);
		})
	}
	create(req, res) {
		Note.create(req.body, (err, note) => {
			if(err){
				return res.json(err);
			}
			return res.json(note);
		})
	}

}

// get all tasks method: index, route: /tasks, type: get
// create a task method: create, route: /tasks type: post
// get a single task form the db method: show, route: /tasks/:id, type: get
// update task by id method: update, route: /tasks/:id, type: put/patch
// delete task by id method: destroy, route: /tasks/:id, type: delete





module.exports = new NotesController();
