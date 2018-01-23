'use strict';

angular.module('digitalApp')

.controller('CarouselCtrl', ['$scope', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'img/slider_1.jpg'
    },
    {
      image: 'img/slider_2.jpg'
    },
    {
      image: 'img/slider_3.jpg'
    }
  ];
}]).controller('mainController', ['$scope', '$route', function($scope, $route) {
    
   $scope.$route = $route;
    
}]).controller('MainMenuController', ['$scope', 'mainMenuService', '$rootScope', function($scope, mainMenuService, $rootScope) {

    $scope.menuData = mainMenuService.getMenuDatas();

}]).controller('MapController', ['$scope', function ($scope) {
    $scope.map = { center: { latitude: 51.149613, longitude: 14.981183 }, zoom: 17 };
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 51.153417,
        longitude: 14.976327
      },
      options: { draggable: false }
    };
}]);