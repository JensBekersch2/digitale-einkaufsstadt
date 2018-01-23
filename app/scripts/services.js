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