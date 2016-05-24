angular.module('app').component('navigation',{
   templateUrl: 'app/template/navigation.html',
   controller: function($http, $filter, componentTypesFactory){
       var ctrl = this;
       ctrl.links = [{
           href: '#/home',
           name: 'Home'
       }];
       ctrl.components = componentTypesFactory.getComponents();
       ctrl.components = $filter('orderBy')(ctrl.components, 'name');
   } 
});