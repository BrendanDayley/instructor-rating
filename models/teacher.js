var mongoose = require('mongoose');
var Schema = mongoose.Schema
var teacherSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		index: true
	},
	university: {
			require: true,
			type: Schema.Types.ObjectId, ref: 'University'
		}
});

module.exports = mongoose.model ('Teacher', teacherSchema);