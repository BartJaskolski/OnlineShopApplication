angular.module('AngularApp')
.controller('LoginAngularControler', function ($scope, LoginService) {
    $scope.IsLogedIn = false;
    $scope.Message = '';
    $scope.Submitted = false;
    $scope.IsFormValid = false;
    $scope.AccountTypes = null;

    $scope.LoginData = {
        Login: '',
        Password: '',
        TypeAccountID: 0
    };

    $scope.$watch('f1.$valid', function (newValue) {
        $scope.IsFormValid = newValue;
    });

    $scope.Login = function () {
        $scope.Submitted = true;
        if ($scope.IsFormValid) {

            LoginService.GetUser($scope.LoginData).then(function (d) {
                console.log(d.data.Data)
                if (d.data.Data != null)
                {
                    $scope.IsLogedIn = true;
                    LoginService.GetAccounts(d.data.Data.TypeAccountID).then(function (da) {
                        $scope.AccountTypes = da.data.Data[0].AccountTypeName;
                        $scope.Message = " Logged : " + d.data.Data.Login + "  Account Type : " + d.data.Data.TypeAccountID + "  :  " + $scope.AccountTypes;
                    })
                }
                else {
                    alert('invalid Credential');
                }
            });
        }
    };
})
.factory('LoginService', function ($http) {
    var factory = {};

    factory.GetAccounts = function (accountID) {
        return $http.get('/api/User/GetTypesAccount?accountid=' + accountID);
        };

    factory.GetUser = function (d) {

        var UserLogindata = $http({
                url: '/api/User/UserLogin',
                method: 'POST',
                data: JSON.stringify(d),
                headers: { 'content-type': 'application/json' }
        });
        return UserLogindata;
        
    };
    return factory;
});