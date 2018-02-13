const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const Message = mongoose.model('Message');

class CommentsController {

	dashboard(req, res) {
		Comment.find({}).sort('-createdAt').exec((err, comments) => {
			if(err){
				res.json(err);
			}
			res.json(comments);
		})
	}
	create(req, res) {
		Comment.create(req.body, (err, comment) => {
			if(err){
				return res.json(err);
			}

         Message.findByIdAndUpdate(req.params.id, { $push: { comments: comment._id } }, (err, post) => {
				if(err){
					return res.json(err)
				}
				User.findByIdAndUpdate(req.session.user_id, { $push: { comments: comment._id } }, (err, user) => {
					if(err){
						return res.json(err)
					}
					return res.json(comment)
				})
			})
		})
	}

	listComments(req, res) {
		Comment.find({message: req.params.id}).populate({ path: 'user', model: 'User' }).exec((err, comments) => {
			if(err){
				return res.json(err)
			}
			return res.json(comments)
		})
	}
}

module.exports = new CommentsController();
