'use strict';

angular.module('digitalApp',['ngRoute','ui.bootstrap','ngAnimate','uiGmapgoogle-maps'])
.run(function(){
}).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
        $routeProvider
            .when('/unternehmen', {
                templateUrl: 'templates/unternehmen.html',
                controller: 'mainController',
                activetab: 'unternehmen',
                title: 'Unternehmer',
                description: 'Hier erhalten interessierte Unternehmen Informationen zur digitalen Einkaufsstadt Görlitz/Zgrozelec'
            })           
            .when('/verein', {
                templateUrl: 'templates/verein.html',
                controller: 'mainController',
                activetab: 'verein',
                title: 'Über den Verein',
                description: 'Verein zur Förderung der digitalen Einkaufsstadt Görlitz/Zgrozelec'
             })           
            .when('/anfahrt', {
                templateUrl: 'templates/anfahrt.html',
                controller: 'mainController',
                activetab: 'anfahrt',
                title: 'Anfahrt & Kontakt',
                description: 'Anfahrt zum Verein zur Förderung der digitalen Einkaufsstadt Görlitz/Zgrozelec'
            })           
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'mainController',
                activetab: 'home',
                title: 'Digitale Einkaufsstadt Görlitz/Zgorzelec',
                description: 'Verein zur Förderung der digitalen Einkaufsstadt Görlitz/Zgrozelec'
            })        
            .otherwise('/');   

            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
            
}]).config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyA5Wd1ZvTFnEKNSVe__qHQOUud3Y8aK5do',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
    
}]).run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);

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
'use strict';

angular.module('digitalApp')

.service('mainMenuService', function() {
     var menuData = {
            listElements: [
                {
                listElementName: 'Home',
                link: '#/',
                id: 0
                },
                {
                listElementName: 'Über den Verein',
                link: '#/verein',
                id: 1
                },
                {
                listElementName: 'Für Unternehmen',
                link: '#/unternehmen',
                id: 2
                },
                {
                listElementName: 'Anfahrt & Kontakt',
                link: '#/anfahrt',
                id: 3
                }               
            ]
        };   
        this.getMenuDatas = function() {
            return menuData;
        };   
        this.getMenuData = function(index) {
            return menuData[index];
        };  
});