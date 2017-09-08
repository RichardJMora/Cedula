'use strict';

angular.module('cedulaApi.creditos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creditos', {
    templateUrl: 'creditos/creditos.html',
    controller: 'creditosCtrl'
  });
}])

.controller('creditosCtrl', [function() {

}]);