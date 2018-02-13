let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

// Middleware setup

// Post request helper
app.use(bodyParser.urlencoded({extended: true}));
// Static content
app.use(express.static(__dirname + "/static"));

// Views
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

// Session
app.use(session({
   secret: 'somestring',
   resave: false,
   saveUninitialized: true,
}))

app.get('/', (req, res) => {
   res.render('index')
})

// Must be at the bottom of the document
var server = app.listen(8000, function() {
   console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here

  socket.on('posting_form', (data) => {
		console.log('Data sent')
		socket.emit('updated_message', { name: data.name, location: data.location, language: data.language, comment: data.comment })
	})

   socket.on("random_number", function(data){
      console.log(data.message)
      socket.emit('updated_number', {number: Math.floor(Math.random()*1000 + 1)})
   })






})
