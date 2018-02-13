let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

// Middleware setup
// Views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// Static content
app.use(express.static(__dirname + "/static"));

// Post request helper
app.use(bodyParser.urlencoded({extended: true}));

// Session
app.use(session({
   secret: 'somestring',
   resave: false,
   saveUninitialized: true,
}))

// Routes
app.get('/', (req, res) => {
   res.render('index')
})

app.get('/showUser', (req, res) => {
   if(req.session.count){
      req.session.count++;
   }
   else{
      req.session.count=1;
   }
   res.render('showUser', { session: req.session })
})

app.post('/login', (req, res) => {
   console.log(req.body);
   req.session.user = req.body.name
   return res.redirect('/showUser')
})



// Must be at the bottom of the document
app.listen(port, () => console.log(`listening on port ${port}....`));
