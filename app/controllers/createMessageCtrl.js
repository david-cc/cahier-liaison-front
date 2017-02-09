/* global angular */
angular.module('app')
  .controller('CreateMessageCtrl', function($location, MessagesSvc) {
    this.destinatairesEnum = ['tous', 'parent1', 'parent2', 'parent3'];

    this.create = function(form, message) {
      if (form.$invalid) return;

      var newMessage = angular.copy(message);
      // appel du service de création d'un message
      MessagesSvc.create(newMessage);
      
      $location.path('/listeMessages');
    };
  });