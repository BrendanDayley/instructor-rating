var app = angular.module('instructorRating', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('home');

	$stateProvider

	//	HOME STATES AND VIEWS ======================================================
		.state('home', {
		url: '/home',
		templateUrl: 'views/home.html',
		controller: 'universityCtrl'
	})

	.state('teachers', {
			url: '/university/:university_id',
			templateUrl: 'views/teacher.html',
			controller: 'getTeachersCtrl'
	})
		
	.state('teachers.newTeacher', {
		templateUrl: 'views/newTeacher.html',
		controller: 'newTeacherCtrl'
	})

	.state('reviews', {
		url: '/reviews/:teacher_id',
		templateUrl: 'views/reviews.html',
		controller: 'reviewCtrl'
	})

	.state('createUniversity', {
		url: '/newUniversity',
		templateUrl: 'views/newUniversity.html',
		controller: 'newUniversityCtrl'
	})



});
