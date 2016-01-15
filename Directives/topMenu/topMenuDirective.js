var app = angular.module('myPortfolio');

app.directive('topMenu', function(){
  return{
    // scope: {
    // },
    templateUrl: 'Directives/topMenu/topMenuDirectiveTmpl.html',
    controller: function($scope, $rootScope){
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

        if(toState.name === 'home') {
          if ($('#profileButton').is(":focus")) {
            $scope.scrollToPlace('#pp2');
          }
          else if ($('#skillsButton').is(":focus")) {
            $scope.scrollToPlace('#pp3');
          }
          else if ($('#portfolioButton').is(":focus")) {
            $scope.scrollToPlace('#pp4');
          }
          else if ($('#upButton').is(":focus")) {
            $scope.scrollToPlace('#topOfPage');
          }
        }
      });
      $scope.scrollToPlace = function(targetId) {
        var target = $(targetId);
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
      };
    }
  };
});

//     link: function($scope, element, attributes) {
//       console.log(element);
//       $(element[child('#intro-hider')].click(function() {
//         $(element).hide( "puff", { }, 3000 );
//       }));
//     }
//   };
// });
