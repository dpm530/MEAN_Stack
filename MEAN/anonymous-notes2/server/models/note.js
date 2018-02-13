var mongoose = require('mongoose')

let NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: [true, 'Note cannot be blank'],
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User cannot be blank']
    }]
}, {timestamps: true} )

mongoose.model('Note', NoteSchema)