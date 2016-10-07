angular
  .module('tunely')
  .controller('AlbumsIndexController', AlbumsIndexController);

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

  vm.deleteAlbum = function(album) {
    $http
      .delete('/api/albums/' + album._id)
      .then(function(response) {
        // pos = vm.albums.map(function(arrayAlbum) { return arrayAlbum._id}).indexOf(album._id);
        // vm.albums.splice(pos, 1);
        var index = vm.albums.indexOf(album);
        vm.albums.splice(index, 1);
      });
  }

  vm.editAlbum = function(album) {
    console.log("genres:",album.genres);
    var genres = album.genres.toString().split(',').map(function(item) { return item.trim(); } );
    album.genres = genres;
    // $http
    //   .put('/api/albums/' + album._id,formData)
    //   .then(function(response.data) {
    //     console.log("response.data",response.data);
    //   });
    $http({
      method: 'PUT',
      url: '/api/albums/' + album._id,
      data: genres
      })
  }

}