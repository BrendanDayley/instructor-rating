var mongoose = require('mongoose');

var universitySchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},
})

module.exports = mongoose.model('University', universitySchema);
