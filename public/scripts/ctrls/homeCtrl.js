app.controller('universityCtrl', function ($scope, universityService) {
	$scope.test = 'hello'
	$scope.universities = universityService.getUniversities();

})



.controller('getTeachersCtrl', function ($scope, teacherService, $stateParams) {
	$scope.teachers = teacherService.getTeachers();
	$scope.universityId = $stateParams.universityid;
	console.log($scope.universityId);
})



.controller('teacherCtrl', function ($scope, teacherService, $stateParams) {

	$scope.teacherId = $stateParams.teacher;
	$scope.teacher = teacherService.getTeacherById($scope.teacherId);

})



.controller('classCtrl', function ($scope, reviewService) {

})



.controller('reviewCtrl', function ($scope, reviewService) {
	$scope.reviews = reviewService.getReviews();
});
