﻿angular.module('AngularApp')
.controller('ProdCatAngularController', function ($scope, ProdCatService) {

    $scope.CategoryID = null;
    $scope.ProductID = null;
    $scope.CategoryList = null;
    $scope.ProductList = null;
    $scope.sIndex = null;

    $scope.StateTextToShow = "Select Product";
    $scope.Result = "";

    // Category
    ProdCatService.GetCategory().then(function (d) {
        $scope.CategoryList = d.data.Data;
    }, function (error) {
        alert('Error');
    });

    // Product
    $scope.GetProdCat = function () {
        $scope.ProductID = null;
        $scope.ProductList = null;
        $scope.StateTextToShow = "Please wait..";

        ProdCatService.GetProdCat($scope.CategoryID).then(function (d) {
            $scope.ProductList = d.data.Data;
            $scope.StateTextToShow = "Select product";
        }, function (error) {
            alert('Error');
        });
    }
    // Result
    $scope.ShowResult = function () {
        $scope.sIndex = $scope.ProductList.map(function (d) {
            return d['ProductID']
        }).indexOf($scope.ProductID)
        $scope.Result = "Selected Category ID : " + $scope.CategoryID + " , Product ID : " + $scope.ProductID + " , Price : " + $scope.ProductList[$scope.sIndex].Price;
    }

})
.factory('ProdCatService', function ($http) {

    var factory = {};

    factory.GetCategory = function () {
        return $http.get('/api/Category/GetCategories');
    }

    factory.GetProdCat = function (categoryID) {
        return $http.get('/api/Product/GetProduct?categoryID=' + categoryID)
    }



    return factory;
});