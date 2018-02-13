const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');

// find message by id and populate comments

// or

// get all comments who's message key == message_id


class MessagesController {

	dashboard(req, res) {
		Message.find({}).sort('-createdAt').populate('comments').exec((err, messages) => {
			if(err){
				res.json(err);
			}
			res.json(messages);
		})
	}

	create(req, res) {
      console.log(req.body)
      Message.create(req.body, (err, message) => {
         if(err){
            return res.json(err)
         }
         //look up user
         User.findByIdAndUpdate(req.session.user_id, { $push: { messages: message._id } }, (err, user) =>{
            if(err){
               return res.json(err)
            }
            console.log(req.session.user_id)
            return res.json(message)
         })
      })
	}

}

module.exports = new MessagesController();
