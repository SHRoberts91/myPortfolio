angular.module('myPortfolio').controller('adminCtrl', function($scope, $timeout, portfolioService, $firebaseArray){
  var fireBaseUrl = "https://myportfolio9000.firebaseio.com/";
  var ref = new Firebase(fireBaseUrl + 'posts');
  var posts = $firebaseArray(ref);
  $scope.addPost = function(){
    $scope.posts.$add($scope.post);
  };
  $scope.deletePost = function(post){
    console.log(posts[post]);
    posts.$remove(post);
  };
  $scope.posts = portfolioService.getPostsArray();

});
