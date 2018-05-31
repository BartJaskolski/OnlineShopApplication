angular.module('AngularApp')
.controller('ProductAngularController', function ($scope, ProductService){
    $scope.Products = null;
    ProductService.GetProductList().then(function (d) {
        $scope.Products = d.data.Data;
    }, function (error) {
        alert('Error');
    });
})
.factory('ProductService', function ($http) {
    var factory = {};
    factory.GetProductList = function () {
        return $http.get('/api/Product/GetProductsList')
    }
    return factory;
})