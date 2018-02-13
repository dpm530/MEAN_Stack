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

app.get('/show', (req, res) => {
   res.render('show', { session: req.session } )
})

app.post('/result', (req, res) => {
   console.log(req.body);
   req.session.user = req.body.name
   req.session.location = req.body.location
   req.session.language = req.body.language
   req.session.comment = req.body.comment
   return res.redirect('/show')
})


// Must be at the bottom of the document
app.listen(port, () => console.log(`listening on port ${port}....`));
