const express = require('express');
const http = require('http')
// const app2 = express();
// const httpServer = http.createServer(app2)
var io = require("socket.io")(app);
// const bodyParser = require('body-parser');
// var cors = require('cors')
// var route = require('./routes/index')
// // initialize our express app

// app2.use(cors({
// 	credentials: true,
// 	origin: true
// }))
// const mongoose = require('mongoose');
// //DATABASE CONNECTION

// let dev_db_url = 'mongodb://anupnair:Ninja123@ds033976.mlab.com:33976/chatroom';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB, {
// 	useNewUrlParser: true
// });
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app2.use(cors())
// // app.use(cors())
// app2.use(express.json())
// app2.use(express.urlencoded({
// 	extended: false
// }))
// app2.use('/', route)

// //you have to make it on 8080
// // httpServer.listen(8081, () => {
// // 	console.log('HTTP Server running on port 8081')
// // })

// httpServer.listen(8081, () => {
// 	console.log("Connected to port:" + 8081);
// })



var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT2 = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT2, () => {
	console.log("Connected to port:" + PORT2);
})

