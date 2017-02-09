/* global angular */
angular.module('app')
.factory('MessagesSvc', function($http) {
  
  // var messages = $http(req).then((reponse) => reponse.data);

  return {
    getMessages() {
      var req = {
        method: 'GET',
        url: 'http://localhost:8081/api/messages',
        headers: {
          'userType': btoa(window.sessionStorage.getItem('usertype')),
          'userName': btoa(window.sessionStorage.getItem('username'))
        }
      };

      return $http(req).then((reponse) => reponse.data);
    },

    create(message) {
      var dest = [];
      if (message.destinataire === 'tous') {
        dest = [
          { 'nom': 'parent1', 'confirmation': false },
          { 'nom': 'parent2', 'confirmation': false },
          { 'nom': 'parent3', 'confirmation': false }
        ];
      } else {
        dest = [{ 'nom': message.destinataire, 'confirmation': false }];
      }

      var req = {
        method: 'POST',
        url: 'http://localhost:8081/api/messages',
        headers: {
          'userType': btoa(window.sessionStorage.getItem('usertype')),
          'userName': btoa(window.sessionStorage.getItem('username'))
        },
        data: {
          'texte': message.texte,
          'date': new Date(),
          'destinataires': dest
        }
      };
      
      return $http(req).then((reponse) => reponse.data);
    }
  };
});