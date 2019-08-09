var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
	place: String,
	type: String,
	cost: {
		actual_cost: Number,
		discount_cost: Number
	},
	itinerary: [{
		title: String,
		details: [String]
	}]
});

module.exports = mongoose.model('Model', Scheme);