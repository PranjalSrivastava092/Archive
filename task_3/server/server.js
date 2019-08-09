var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var controller = require('../../task_1/controllers/controller');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/getAll', (req,res) => {
	return controller.retrieveAll(req,res);
});

mongoose.connect('mongodb://localhost:27012/database', function(err){
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