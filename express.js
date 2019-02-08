
var path=require('path'),
    express=require('express');
	
	
module.exports.init = function(){

var app=express();

app.use('/',express.static('client'));

return app;
};