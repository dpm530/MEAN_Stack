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

var COUNT=0
io.sockets.on('connection', function (socket) {
   console.log("Client/socket is connected!");
   console.log("Client/socket id is: ", socket.id);

   socket.on("click_button", function(data){
      COUNT+=1;
      io.emit('update_count', { count:COUNT })

   })

   socket.on("click_reset_button", function(data){
      COUNT=0;
      io.emit('reset_count', { count:COUNT })
   })

})  
