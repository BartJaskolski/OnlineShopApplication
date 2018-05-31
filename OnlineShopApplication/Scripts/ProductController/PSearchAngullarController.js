angular.module('AngularApp')
.controller('PSearchAngullarController', function ($scope, PSearchService) {
    $scope.message = "Works";
})
.factory('PSearchService', function($http){
    var factory = {}

    factory.get = function () { };

    return factory;

})