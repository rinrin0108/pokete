angular.module('starter.controllers', [])

.controller('PoketesCtrl', function($scope, poketes) {
  $scope.poketes = poketes;
  console.log("poketes", poketes);
})
.controller('StockDetailCtrl', function($scope, trend) {
  $scope.trend = trend;
  console.log("trends", trend);

})
.controller('NewsCtrl', function($scope) {

})
.controller('AccountCtrl', function($scope) {

})
.controller('QrreadCtrl', function($scope) {
  console.log("Qrread", trend);
})

/*
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
*/
;
