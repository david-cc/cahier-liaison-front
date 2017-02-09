/* global angular */
angular.module('app')
  .controller('DetailMessageCtrl', function($routeParams, $location, MessagesSvc) {
    this.message = null;
    this.messageKeys = [];
    this.usertype = window.sessionStorage.getItem('usertype');

    MessagesSvc.getMessage($routeParams.id).then((message) => {
      this.message = message;
      this.messageKeys = Object.keys(this.message);
    });

    this.confirmerLecture = function() {
      // appel du service de confirmation de lecture d'un message
      MessagesSvc.confirmerLecture(this.message);
      
      $location.path('/listeMessages');
    };

    this.isParent = function() {
      return this.usertype === 'parent';
    };
  });