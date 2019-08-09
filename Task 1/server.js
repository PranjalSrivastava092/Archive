var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = config.PORT;
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/zaaaDB', function(err){
	if(err){
		console.log('FAILED TO CONNECT' + err);
	}
	else{
		console.log('connected to database');
	}
});

app.listen(port, function(){
	console.log('listening on port ' + port);
});