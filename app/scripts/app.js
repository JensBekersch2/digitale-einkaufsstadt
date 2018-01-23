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
