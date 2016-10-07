/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('tunely', ['ngRoute'])
  .config(config)
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/albums-show',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

