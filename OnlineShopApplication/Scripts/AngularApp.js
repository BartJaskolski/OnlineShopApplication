(function () {

    //Module
    var app = angular.module('AngularApp', ['ngRoute']);

    //Controllers
    app.controller('UserController', UserController)
    
    function UserController($scope) {
        $scope.message = "UserController";
    }

})();