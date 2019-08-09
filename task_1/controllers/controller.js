var Model = require('../models/model');
var mongoose = require('mongoose');

//Creating CRUD functionality

module.exports.create = (req, res) => {
	var model = new Model(req.body);
	model.save((err,doc) => {
		if(err){
			console.log(err);
			res.send({
				success: false,
				msg: err
			});
		}
		else{
			res.send({
				success: true,
				doc: doc
			});
		}
	});
}

module.exports.retrieve = (req,res) =>{
	Model.findById(mongoose.mongo.ObjectId(req.params.id), (err, doc) => {
		if(err || !doc){
			console.log("Not Found");
			res.send({
				success: false,
				msg: err
			});
		}
		else{
			res.send({
				success: true,
				doc: doc
			});
		}
	});
}

module.exports.retrieveAll = (req,res) =>{
	Model.find({}, (err, docs) => {
		if(err || !docs){
			console.log("Not Found");
			res.send({
				success: false,
				msg: err
			});
		}
		else{
			res.send({
				success: true,
				docs: docs
			});
		}
	});
}

module.exports.update = (req,res) => {
	Model.findByIdAndUpdate(mongoose.mongo.ObjectId(req.body.id), {$set: req.body} , (err,doc) => {
		if(err){
			console.log(err);
			res.send({
				success: false,
				msg: err
			})
		}
		else{
			doc.save((err) => {
				if(err) console.log(err);
				else{
					res.send({
						success: true,
						msg: "Doc Updated"
					});
				}
			})
		}
	});
}

module.exports.delete = (req,res) => {
	Model.findByIdAndRemove(mongoose.mongo.ObjectId(req.params.id), (err) => {
		if(err){
			console.log(err);
			res.send({
				success: false,
				msg: err
			});
		}
		else{
			res.send({
				success: true,
				msg: "Doc deleted"
			});
		}
	});
}

