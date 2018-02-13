const mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
   comment: {
      type: String,
      required: [true, 'Comment cannot be blank'],
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
   }
}, { timestamps: true })

mongoose.model('Comment', CommentSchema)
