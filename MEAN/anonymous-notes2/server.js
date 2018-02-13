const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 8000
const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/dist'))
app.use(session({
    secret: 'secretykey',
    resave: false,
    saveUnitialized: true
}))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)


app.listen(port, () => console.log(`listening on port ${port}...`))