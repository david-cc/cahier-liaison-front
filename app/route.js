/* global angular */
angular.module('app')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl as loginCtrl'
    })
    .when('/accueil', {
      templateUrl: 'views/accueil.html',
      controller: 'AccueilCtrl as accueilCtrl'
    })
    .when('/createMessage', {
      templateUrl: 'views/createMessage.html',
      controller: 'CreateMessageCtrl as createMessageCtrl'
    })
    .when('/listeMessages', {
      templateUrl: 'views/listeMessages.html',
      controller: 'ListeMessagesCtrl as listeMessagesCtrl'
    })
    .when('/detailMessage/:id', {
      templateUrl: 'views/detailMessage.html',
      controller: 'DetailMessageCtrl as detailMessageCtrl'
    })

    .otherwise('/login');
});
