var app = angular.module('myPortfolio');
app.directive('thoughtsDirective', function(){
  return{
    templateUrl: 'Directives/thoughtsDirective/thoughtsDirectiveTmpl.html',
    controller: function($scope){
      // $(htmlaccordion());

    },
    link: function( scope, element, attributes ){

      setTimeout(function(){
          $('.posts-toggle').accordion({
            header:"h3",
            active: 10
          });
          console.log($('.posts-toggle'));

      },500);
              // element.find('ul').on('.posts-toggle',function(){
              //     element.find('ul').accordion({
              //        collapsible: true,
              //         active: false
              //      });
              // });
      // element.find('.intro-hider').click(function() {
      //   element.find('.intro-vid').hide( "puff", {  }, 2000 );
      //   element.find('.intro-hider').hide( "slow" );
      //   element.find('bg-img').show("puff", { percent:150 }, 3000);
      // });
    }
  };
});
