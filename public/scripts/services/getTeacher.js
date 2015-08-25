app.service('universityService', function ($http, $q) {

	this.getUniversities = function () {
		var defer = $q.defer();
		var url = '/api/universities';
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			console.log(res);
			defer.resolve(res);
		});
		return defer.promise;
	};

})


.service('teacherService', function ($http, $q) {

	this.getTeachers = function () {
		var defer = $q.defer();
		var url = '/api/teachers';
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			console.log(res);
			defer.resolve(res);
		});
		return defer.promise;
	};

	this.getTeacherById = function (id) {
		console.log(this.getTeachers());
	}
	this.getTeacherById();
})




.service('reviewService', function ($http, $q) {

	this.getReviews = function () {
		var defer = $q.defer();
		var url = '/api/reviews';
		$http({
			method: 'GET',
			url: url,
		}).then(function (res) {
			console.log(res);
			defer.resolve(res);
		});
		return defer.promise;
	};
})

.service('classService', function ($http, $q) {

	this.getClasses = function () {
		return [{
			name: 'potions',
			teacherId: 1,
			classId: 394,
			schoolId: "un1v3rs1ty",
		}]
	};

})
