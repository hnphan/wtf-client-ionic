angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PortalCtrl', function($scope, $state, $http, MenuService) {  
  $scope.doRefresh = function() {
    console.log('Refreshing!');
      MenuService.loadData().then($scope.$broadcast('scroll.refreshComplete'));
    }
})

.controller('FoodMenuCtrl', function($scope, $stateParams, $ionicLoading, MenuService) {
  $scope.loadingIndicator = $ionicLoading.show({
    content: 'Loading Data',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 300,
    showDelay: 500
  });

  $scope.doRefresh = function() {
    console.log('Refreshing!');
      MenuService.getMenu($stateParams.menuId).then(
        function(promisedData) {
          $scope.$broadcast('scroll.refreshComplete');
        });  
  };

  MenuService.getMenu($stateParams.menuId).then(
    function(promisedData) {
      $ionicLoading.hide();
      if (promisedData != "Error") {
        $scope.menuData = promisedData;
        console.log("menuData: " + $scope.menuData);
        $scope.menuContent = $scope.menuData.content;
      }
      else {
        console.log("Error loading menu data... Will display error message");
        $scope.menuData = promisedData;
        $scope.menuContent = $scope.menuData.content;
      }
    });
});
