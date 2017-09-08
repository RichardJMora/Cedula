'use strict';

angular.module('cedulaApi.version', [
  'cedulaApi.version.interpolate-filter',
  'cedulaApi.version.version-directive'
])

.value('version', '0.1');
