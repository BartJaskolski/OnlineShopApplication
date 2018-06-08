angular.module('AngularApp')
.controller('CategoryAngularController', function ($scope, CategoryService) {
    $scope.categoryList = null;
    $scope.message = "Witaj ";
    CategoryService.GetCategoryList().then(function (d) {
        $scope.categoryList = d.data.Data;
        console.log($scope.categoryList)
    }, function (error) {
        alert('error');
    })

})
.factory('CategoryService', function ($http) {
    var factory = {};

    factory.GetCategoryList = function () {
        return $http.get('/api/Category/CategoryList')
    }
    return factory;
})