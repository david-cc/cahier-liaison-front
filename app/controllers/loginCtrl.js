/* global angular, window */
angular.module('app')
  .controller('LoginCtrl', function($location) {
    this.users = [
      { name: 'professeur1', type: 'professeur' },
      { name: 'parent1', type: 'parent' },
      { name: 'parent2', type: 'parent' },
      { name: 'parent3', type: 'parent' },
    ];

    // reset du sessionStorage
    window.sessionStorage.removeItem('username');
    window.sessionStorage.removeItem('usertype');

    this.login = function() {
      // SessionStorage des infos utilisateur
      window.sessionStorage.setItem('username', this.user.name);
      window.sessionStorage.setItem('usertype', this.user.type);

      if (this.user.type === 'professeur' || this.user.type === 'parent') {
        $location.path('/accueil');
      } else {
        $location.path('/login');
      }
    };
  });