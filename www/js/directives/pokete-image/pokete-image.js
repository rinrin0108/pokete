angular.module('starter.directives.pokete-image', [])

.directive('poketeImage', function() {
  return {
    scope: {
      rating: "="
    },
    templateUrl: 'js/directives/pokete-image/pokete-image.html',
    link: function(scope, elem, attrs) {
    },
    controller: function() {
    }
  };
});
