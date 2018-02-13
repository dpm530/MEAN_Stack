const Users = require('../controllers/users');
const Messages = require('../controllers/messages');
const Comments = require('../controllers/comments');
const path = require('path');

module.exports = function(app) {
   app.post('/users', Users.create);
   app.post('/login', Users.authenticate);
   app.delete('/logout', Users.logout);
   app.get('/session', Users.session);
   app.get('/users', Users.dashboard);

   app.get('/messages', Messages.dashboard);
   app.post('/messages', Messages.create);

   app.get('/listComments/:id', Comments.listComments);
   app.get('/comments', Comments.dashboard);
   app.post('/comments/:id', Comments.create);


   app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
   })
}
