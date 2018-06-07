angular.module('AngularApp')
.controller('PSearchAngullarController', function ($scope, PSearchService) {
    $scope.message = "Works";
    $scope.SearchString = "SearchString"

    $scope.SearchProduct = function (search, category) {
        PSearchService.SearchP()

    }

   
})
.factory('PSearchService', function($http){
    var factory = {}

    factory.SearchP = function () { };

    return factory;

})