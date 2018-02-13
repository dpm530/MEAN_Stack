var mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }],
}, { timestamps: true })

// UserSchema.methods.authenticate = function(password) {
//     return bcrypt.compareSync(password, this.password);
// }

mongoose.model('User', UserSchema)