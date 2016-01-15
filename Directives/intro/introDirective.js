var app = angular.module('myPortfolio');
app.directive('introDirective', function($timeout){
  return{
    scope: {

    },
    templateUrl: 'Directives/intro/introDirectiveTmpl.html',
    controller: function($scope, $timeout){
      console.log('INTROCTRL WORKING!!!!');
      // $scope.isLoading = false;
      // $timeout(function(){
      //   window.onload = $scope.isLoading = true;
      // }, 500);
      // $('.intro-hider').click(function() {
      //   $('.intro-vid').hide( "puff", {  }, 2000 );
      //   $('.intro-hider').hide( "slow" );
      //   $('bg-img').show("puff", { percent:150 }, 3000);
      // });
    },
    link: function( scope, element, attributes ){
      scope.isLoading = false;
      $timeout(function(){
        window.onload = scope.isLoading = true;
      }, 500);
      element.find('.intro-hider').click(function() {
        element.find('.intro-vid').hide( "puff", { percent: 110 }, 1500 );
        element.find('.intro-hider').hide( "puff", { percent: 100 }, 500 );
        element.find('.my-picture').hide( "puff", { percent: 100 }, 500 );
        element.find('.intro-text').hide( "fast" );


        element.find('bg-img').show("puff", { percent:150 }, 3000);
      });
    }
  };
});
