const express       = require('express')
const app           = express()
const server        = require('http').Server(app)       // creating a server to be used with socket.io
// creates a server, based on the express server and passes that to socket.io,
// so socket.io knows what server we're actually using and how to interact with that
const io            = require('socket.io')(server)

server.listen(3000)