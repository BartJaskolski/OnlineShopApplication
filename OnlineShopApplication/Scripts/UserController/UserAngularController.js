angular.module('AngularApp')
    .controller('UserAngularController', function ($scope, UserAngularService) {
        $scope.User = null;
        UserAngularService.GetLastUser().then(function (d) {
            $scope.User = d.data.Data;
        }, function () {
            alert('Failed');
        });
    })
    .factory('UserAngularService', function ($http) {
        var factory = {};
        factory.GetLastUser = function () {
            return $http.get('/api/User/GetLastUser');
        }
        return factory;
    });
        