var mongoose = require('mongoose');
var Schema = mongoose.Schema

var reviewSchema = new Schema({
	userId: {type: Schema.Types.ObjectId, ref: 'User'},
	rating: {
		type: Number,
		require: true,
	},
	comment:{
		type: String,
		require: false,
	} ,
	classId: {type: Schema.Types.ObjectId, ref: 'Class'},
});

module.exports = mongoose.model ('Review', reviewSchema);