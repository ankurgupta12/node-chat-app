const express = require('express');
var socketIo = require('socket.io');
var http = require('http');

var path =  require('path');

var app = express();
var server = http.createServer(app);
var io = socketIo(server);

io.on('connection',(socket)=>{

console.log('new user connected');

socket.emit('newMessage',{
	'from':"myemail.com",
	'text':"new Hi Ankiuu"
});
socket.on('createMessage',(message)=>{
	console.log(message);
})
socket.on('disconnect',()=>{
	console.log('client is disconnectd');
});

});

const port = process.env.PORT || 3000;
var publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
server.listen(port,()=>{
	console.log('server is start');
})