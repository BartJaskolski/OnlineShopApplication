angular.modulde('AngularApp')
.controller('CategoryAngularController', function ($scope, CategoryService) {
    $scope.categoryList = null;

    CategoryService.GetCategoryList().then(function (d) {
        categoryList = d.data.Data;
    })

})
.factory('CategoryService', function ($http) {
    var factory = {};

    factory.GetCategoryList = function () {
        return $http.get('/api/Category/CategoryList')

    }
    return factory;
})