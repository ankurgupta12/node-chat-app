var socket = io();
socket.on('connect',()=>{
	console.log('connected to server');
	socket.emit('createMessage',{
	'to':"ankur",
	'text':"anll"
})
});
socket.on('disconnect',()=>{
	console.log('server is disconnectd');
});
socket.on('newMessage',(message)=>{
	console.log('newMessage',message);
});
