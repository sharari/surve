// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers'])
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])
.run(function($ionicPlatform, ngFB) {
	ngFB.init({appId: '1803097819917474'});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
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
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tabs', {
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })

  .state('app.discounts', {
    url: '/discounts',
    views: {
      'menuContent': {
        templateUrl: 'templates/discounts.html'
      }
    }
  })
  
  .state('app.submit', {
    url: '/submit',
    views: {
      'menuContent': {
        templateUrl: 'templates/submit.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants.html',
          controller: 'RestaurantsCtrl'
        }
      }
    })

    .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  
  .state('app.single', {
    url: '/restaurants/:restaurantId',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurant.html',
        controller: 'RestaurantCtrl'
      }
    }

  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/restaurants');
});


