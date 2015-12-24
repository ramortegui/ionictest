angular
  .module('Ionictest')
  .config(config);
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'client/templates/info.html'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html'
        }
      }
    });
  $urlRouterProvider.otherwise('tab/info');
}
