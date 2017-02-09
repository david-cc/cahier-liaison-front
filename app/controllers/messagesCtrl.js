/* global angular */
angular.module('app')
  .controller('MessagesCtrl', function($location, MessagesSvc) {
    this.messages = [];
    this.messagesKeys = [];
    this.destinatairesEnum = ['tous', 'parent1', 'parent2', 'parent3'];

    // appel du service de récupération des messages
    MessagesSvc.getMessages().then((messages) => {
      this.messages = messages;
      this.messagesKeys = Object.keys(this.messages[0]);
    });

    this.create = function(form, message) {
      if (form.$invalid) return;

      var newMessage = angular.copy(message);
      // appel du service de création d'un message
      MessagesSvc.create(newMessage);
      
      $location.path('/listeMessages');
    };
  });