app.controller('universityCtrl', function ($scope, universityService) {
	$scope.universities;
	var getUniversities = function () {
		universityService.getUniversities().then(function (res) {
			$scope.universities = res.data;
		});
	}()
})



.controller('getTeachersCtrl', function ($scope, teacherService, $stateParams) {
	$scope.teachers;
	var getTeachers = function () {
		teacherService.getTeachers().then(function (res) {
			$scope.teachers = res.data;
		});
	}();
	//	$scope.universityId = $stateParams.universityid;
	//	console.log($scope.universityId);
})



.controller('teacherCtrl', function ($scope, teacherService, $stateParams) {

	$scope.teacherId = $stateParams.teacher;
	$scope.teacher = teacherService.getTeacherById($scope.teacherId);

})



.controller('classCtrl', function ($scope, reviewService) {

})


.controller('reviewCtrl', function ($scope, reviewService) {
	$scope.reviews;
	var getReviews = function () {
		reviewService.getReviews().then(function (res) {
			$scope.reviews = res.data;
		});
	}();
})

.controller('newUniversityCtrl', function ($scope, universityService) {
	$scope.test = 'test';
})
