/* global angular */
angular.module('app', ['ngRoute'])
.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});