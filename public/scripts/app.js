var app = angular.module('instructorRating', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	//	HOME STATES AND VIEWS ======================================================
		.state('home', {
		url: '/home',
		templateUrl: './views/home.html',
		controller: 'universityCtrl'
	})

	.state('teachers', {
		url: '/university/:university_id',
		templateUrl: './views/teacher.html',
		controller: 'getTeachersCtrl'
	})

	.state('reviews', {
		url: '/reviews',
		templateUrl: './views/reviews.html',
		controller: 'reviewCtrl',
	})
	.state('createUniversity', {
		url: '/new university',
		templateUrl: './views/newUniversity.html',
		controller: 'newUniversityCtrl'
	})

});
