app.service('universityService', function () {

	this.getUniversities = function () {

		return [{
			id: 'un1v3rs1ty',
			name: 'Hogwarts',
		}]

	}

})


.service('teacherService', function () {

	this.getTeachers = function () {
		return [{
			name: 'Severus Snape',
			schoolId: 'un1v3rs1ty',
			id: 1,
		}]
	}

	this.getTeacherById = function (id) {
		console.log(this.getTeachers());
	}
	this.getTeacherById();
})




.service('reviewService', function () {

	this.getReviews = function () {
		return [{
			id: '1234321',
			userId: 987654644,
			rating: 1,
			comment: 'What is snapes problem, he always has it out for me!',
			classId: 394,
		}]
	}

})

.service('classService', function () {

	this.getClasses = function () {
		return [{
			name: 'potions',
			teacherId: 1,
			classId: 394,
			schoolId: "un1v3rs1ty",
		}]
	};

})
