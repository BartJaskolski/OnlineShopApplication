﻿angular.module('AngularApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        redirectTo: function () {
            return '/Login';
        }
    })
    .when('/ProdCat', {
        templateUrl: '/AngularViews/ProdCat.html',
        controller: 'ProdCatAngularController',
    })
    .when('/ProductList', {
        templateUrl: '/AngularViews/ProductList.html',
        controller: 'ProductAngularController',
    })
    .when('/ProductSearch', {
        templateUrl: '/AngularViews/ProductSearch.html',
        controller: 'PSearchAngullarController',
    })
    .when('/Login', {
        templateUrl: '/AngularViews/Login.html',
        controller: 'LoginAngularControler',
    })
    .otherwise('/Error', {
        templateUrl: '/AngularViews/Error.html',
        controller: 'ErrorController',
    })

})
.controller('HomeController', function ($scope) {
    $scope.message = "Home controller";
})
.controller('ErrorController', function ($scope) {
    $scope.message = " This is Error controller";
})