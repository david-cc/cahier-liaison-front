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
      controller: 'MessagesCtrl as messagesCtrl'
    })
    .when('/listeMessages', {
      templateUrl: 'views/listeMessages.html',
      controller: 'MessagesCtrl as messagesCtrl'
    })
    .otherwise('/login');
});
