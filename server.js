const express       = require('express')
const app           = express()
const server        = require('http').Server(app)       // creating a server to be used with socket.io
// creates a server, based on the express server and passes that to socket.io,
// so socket.io knows what server we're actually using and how to interact with that
const io            = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

// set up the express server
app.set('view engine', 'ejs')                           // how to render the views
app.use(express.static('public'))                       // all javascript and css files in public folder

// routers
app.get('/', (req, res) => {
    // create a new room and redirect the user to that room
    res.redirect(`/${uuidV4()}`)                        // gives a dynamic url(room)
})

// dynamic parameter passed into the url
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})

server.listen(3000)