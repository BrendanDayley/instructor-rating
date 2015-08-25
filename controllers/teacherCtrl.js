var Teacher = require('../models/teacher');

module.exports = {
	create: function(req, res) {
		var newTeacher = new Teacher(req.body);
		newTeacher.save( function (err, result) {
		if (err) return res.status(418).send(err);
		else res.send(result);
	});
	},
	read: function(req, res) {
		Teacher.find(req.query)
			.exec(function (err, result) {
				if(err) return res.status(418).send(err);
				else res.send(result);
			});
	}
}

