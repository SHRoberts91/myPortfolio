angular.module('myPortfolio').controller('myThoughtsCtrl', function($scope, portfolioService){
  $scope.posts = portfolioService.getPostsArray();
});
