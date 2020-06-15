var io = require("socket.io")(app);
// initialize our express app

const mongoose = require('mongoose');
//DATABASE CONNECTION

//you have to make it on 8080
// httpServer.listen(8081, () => {
// 	console.log('HTTP Server running on port 8081')
// })

httpServer.listen(8081, () => {
	console.log("Connected to port:" + 8081);
})

var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT2 = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT2, () => {
	console.log("Connected to port:" + PORT2);
})

