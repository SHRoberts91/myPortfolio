var app = angular.module('myPortfolio', ['ui.router', 'firebase', 'ngAnimate']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    templateUrl: '/routes/home/homeTmpl.html',
    controller: 'homeCtrl',
    url: '/home'
  })
    .state('mySkills', {
      templateUrl: '/routes/mySkills/mySkillsTmpl.html',
      controller: 'mySkillsCtrl',
      url: '/mySkills'
    })
    .state('myPortfolio', {
      templateUrl: '/routes/myPortfolio/myPortfolioTmpl.html',
      controller: 'myPortfolioCtrl',
      url: '/myPortfolio'
    })
    .state('callMe', {
      templateUrl: '/routes/callMe/callMeTmpl.html',
      controller: 'callMeCtrl',
      url: '/callMe'
    })
    .state('myThoughts', {
      templateUrl: '/routes/myThoughts/myThoughtsTmpl.html',
      controller: 'myThoughtsCtrl',
      url: '/myThoughts'
    })
    .state('admin', {
      templateUrl: '/routes/admin/adminTmpl.html',
      controller: 'adminCtrl',
      url: '/admin'
    });

    $urlRouterProvider.otherwise('/home');

});
