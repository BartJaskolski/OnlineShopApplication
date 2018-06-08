angular.module('AngularApp')
.controller('PSearchAngullarController', function ($scope, PSearchService) {

    $scope.searchText = ""
    $scope.SearchedProducts = null;
    
    PSearchService.SearchP().then(function (d) {
        $scope.ProductList = d.data.Data;
    }, function (error) {
        alert('error !');
    });

    $scope.complete = function (string) {
        var output = [];

        angular.forEach($scope.ProductList, function (searchText) {
            if (searchText.ProductName.toLowerCase().indexOf(string.toLowerCase()) >= 0) {
                output.push(searchText.ProductName);
            }
        });
        $scope.filterProduct = output;
    }

    $scope.fillTextbox = function(string){
        $scope.searchText = string;
        $scope.hidethis = true;
    }

    $scope.SearchProduct = function (search) {
        PSearchService.SearchProduct(search).then(function (d) {
            console.log(d);
            $scope.SearchedProducts = d.data.Data;
        })
    }
})
.factory('PSearchService', function($http){
    var factory = {};

    factory.SearchP = function () {
        return $http.get('/api/Product/GetProductNamesList');
    };
    
    factory.SearchProduct = function (search) {
        return $http.get('/api/Product/SearchProduct?searchText='+search)
    }

    return factory;
})