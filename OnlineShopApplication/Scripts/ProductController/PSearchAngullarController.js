angular.module('AngularApp')
.controller('PSearchAngullarController', function ($scope, PSearchService) {
    $scope.message = "Works";
    $scope.SearchString = "SearchString"

    $scope.list = ["asdasd", "bartek", "Liana", "Jacek", "irek"];
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

    $scope.SearchProduct = function (search, category) {
        PSearchService.SearchP()
    }
})
.factory('PSearchService', function($http){
    var factory = {};

    factory.SearchP = function () {
        return $http.get('/api/Product/GetProductNamesList');
    };
    
    factory.SearchProduct = function () {
        return $http.get('/api/Product/SearchProduct')
    }

    return factory;
})