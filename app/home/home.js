'use strict';

angular.module('cedulaApi.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inicio', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.search = function() {
    $http.get('https://cedula-api.herokuapp.com/api/v1/search?nacionalidad='+$scope.nacionalidad+'&cedula='+$scope.cedula)
    .success(function(data, status, headers, config) {
        $scope.results = data;
        console.log(data)
      })
    .error(function(data, status, headers, config) {
        $scope.error = "¡Ha ocurrido un error en la consulta por favor vuelve a intentalo! Error" + " " + status;    
        console.log("Estatus Error", status)       
      });
    }
}]);
