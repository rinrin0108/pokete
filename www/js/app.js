// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'starter.directives.star-rating',
  'starter.directives.comments'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.trends', {
    url: '/trends',
    views: {
      'tab-trends': {
        templateUrl: 'templates/tab-trends.html',
        controller: 'TrendsCtrl'
      }
    },
    resolve: {
      trends: function(Trend) {
        return Trend.all();
      }
    }
  })

  .state('tab.stock-detail', {
    url: '/stocks/:id',
    views: {
      'tab-trends': {
        templateUrl: 'templates/tab-stock-detail.html',
        controller: 'StockDetailCtrl'
      }
    },
    resolve: {
      trend: function($stateParams, Trend) {
        return Trend.get($stateParams.id);
      }
    }
  })

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.qrread', {
    url: '/qrread',
    views: {
      'tab-qrread': {
        templateUrl: 'templates/tab-qrread.html',
        controller: 'QrreadCtrl'
      }
    }
  })

  .state('tab.qrread_sample', {
    url: '/qrread_sample',
    views: {
      'tab-qrread_sample': {
        templateUrl: 'templates/tab-qrread_sample.html',
        controller: 'QrreadSampleCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/trends');

});
