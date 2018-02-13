//Be sure to import all controllers into routes!!
const Notes = require('../controllers/notes')
const Users = require('../controllers/users')
const path = require('path')

module.exports = function(app){
    app.get('/notes', Notes.dashboard)
    app.post('/notes', Notes.create)
    app.delete('/notes/:id', Notes.destroy)

    app.get('/users', Users.dashboard)
    app.post('/users', Users.create)
    app.post('/login', Users.authenticate)
    app.delete('/users/:id', Users.logout)

    app.get('/session', Users.session)

    app.all("*", (req,res) => {
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
} 
