angular.module('myPortfolio').service('portfolioService', function($http, $q, $firebaseArray, $firebaseObject){
    var fireBaseUrl = "https://myportfolio9000.firebaseio.com/";
    this.getPostsArray = function(){
      var ref = new Firebase(fireBaseUrl + 'posts');
      return $firebaseArray(ref);
    };
});
