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

  // vm.newAlbum = {
  //     name: 'Viva Hate',
  //     artistName: 'Morrissey'
  // };

  vm.albums = [];
  $http
    .get('/api/albums')
    .then(function(response) {
      vm.albums = response.data;
    });

  vm.createAlbum = function () {
    var formData = {
      name: vm.newAlbum.name,
      artistName: vm.newAlbum.artistName,
      releaseDate: vm.newAlbum.releaseDate,
      genres: vm.newAlbum.genres
    }
    $http
      .post('/api/albums',formData)
      .then(function(response) {
        vm.albums.push(response.data);
      });
  }

}
