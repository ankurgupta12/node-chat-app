const express = require('express');
var path =  require('path');
var app = express();
const port = process.env.PORT || 3000;
var publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
app.listen(port,()=>{
	console.log('server is start');
})