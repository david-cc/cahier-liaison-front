/* global angular */
angular.module('app')
  .controller('ListeMessagesCtrl', function(MessagesSvc) {
    this.messages = [];
    this.messagesKeys = [];

    // listeMessages: appel du service de récupération des messages
    MessagesSvc.getMessages().then((messages) => {
      this.messages = messages;
      this.messagesKeys = Object.keys(this.messages[0]);
    });
  });