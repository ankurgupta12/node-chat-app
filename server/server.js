const express = require('express');
var socketIo = require('socket.io');
var http = require('http');

var path =  require('path');

var app = express();
var server = http.createServer(app);
var io = socketIo(server);

io.on('connection',(socket)=>{

console.log('new user connected');
socket.emit('createMessage',{
	from:"admin",
	text:"welcomr to chat aapp"
})
socket.broadcast.emit('createMessage',{
	from:"admin",
	text:"welcomr to chat aapp",
	createdAt:new Date().getTime()
})

socket.on('createMessage',(message)=>{
	console.log(message,'createMessage');
	io.emit('newMessage',{
		from:message.from,
		text:message.text,
		createdAt:new Date().getTime()
	})
});
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