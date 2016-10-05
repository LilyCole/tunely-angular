/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController ($http) {
  var vm = this;
  vm.newAlbum = {};

  vm.albums = [];
  $http
    .get('/api/albums')
    .then(function(response) {
      vm.albums = response.data;
    });

  vm.createAlbum = function () {
    $http
      .post('/api/albums',vm.newAlbum)
      .then(function(response) {
        vm.albums.push(response.data);
      });
  }

}
