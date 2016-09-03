app = angular.module('app', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/default.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});