angular.module('app').component('componentName', {
   templateUrl: 'path/to/component.html',
   controller: function($http, $filter){
       var ctrl = this;
       ctrl.records = [];
       ctrl.editRecord = function(record){
           console.log('Edit Record Requested: ', record);
       }
       ctrl.search = function(searchValue){
           if(searchValue){
               ctrl.getRecords(function(){
                   ctrl.records = $filter('filter')(ctrl.records, function(record){
                       return record.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 
                       || record.lastName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
                   });
               });
           }else{
               ctrl.getRecords();
           }
       }
       ctrl.getRecords = function(cb){
           $http.get('data/beatles.json').then(function success(response){
               ctrl.records = response.data;
               if(cb) cb();
           }, function failure(response){
               console.error('Sorry an error occured', response);
           })
       }
       ctrl.getRecords();
   }
});