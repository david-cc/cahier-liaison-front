/* global angular */
angular.module('app')
  .controller('AccueilCtrl', function() {
    this.username = window.sessionStorage.getItem('username');
    this.usertype = window.sessionStorage.getItem('usertype');
    
    this.isParent = function() {
      return this.usertype === 'parent';
    };

    this.isProfesseur = function() {
      return this.usertype === 'professeur';
    };
  });