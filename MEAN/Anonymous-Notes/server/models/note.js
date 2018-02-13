
// title: (string)
// description: (string, default to empty string)
// completed: (boolean, default to: false)
// created_at: (date, default to current date)
// updated_at: (date, default to current date)

const mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
	note: {
		type: String,
		required: [true, 'Note must be at least three characters.'],
		minlength: [3, 'Note must be at least three characters.']
	}
}, { timestamps: true });

mongoose.model('Note', NoteSchema);
