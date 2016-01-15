var app = angular.module('myPortfolio');
app.directive('fadeTextDirective', function($timeout){
  return{
    templateUrl: 'Directives/fadeTextDirective/fadeTextDirectiveTmpl.html',
    link: function( scope, element, attributes ){
      var divs = $('div[id^="content-"]').hide(),
          i = 0;
      (function cycle() {

          divs.eq(i).fadeIn(2000)
                    .delay(500)
                    .fadeOut(2000, cycle);

          i = ++i % divs.length;

})();
    }
};
});
