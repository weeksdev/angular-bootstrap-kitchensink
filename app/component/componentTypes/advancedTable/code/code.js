angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
       ctrl.records = [{
           firstName: 'John',
           lastName: 'Lennon',
           instrument: 'Guitar',
           membershipStartYear: new Date('1960-01-01'),
           membershipEndYear: new Date('1969-01-01'),
           imgSrc: ''
       },{
           firstName: 'Ringo',
           lastName: 'Starr',
           instrument: 'Drums',
           membershipStartYear: new Date('1962-01-01'),
           membershipEndYear: new Date('1970-01-01'),
           imgSrc: ''
       },{
           firstName: 'Pete',
           lastName: 'Best',
           instrument: 'Drums',
           membershipStartYear: new Date('1960-01-01'),
           membershipEndYear: new Date('1962-01-01'),
           imgSrc: ''
       },{
           firstName: 'Paul',
           lastName: 'McCartney',
           instrument: 'Bass',
           membershipStartYear: new Date('1960-01-01'),
           membershipEndYear: new Date('1970-01-01'),
           imgSrc: ''
       },{
           firstName: 'George',
           lastName: 'Harrison',
           instrument: 'Lead Guitar',
           membershipStartYear: new Date('1960-01-01'),
           membershipEndYear: new Date('1970-01-01'),
           imgSrc: ''
       },{
           firstName: 'Stuart',
           lastName: 'Sutcliffe',
           instrument: 'Bass',
           membershipStartYear: new Date('1960-01-01'),
           membershipEndYear: new Date('1961-01-01'),
           imgSrc: ''
       }];
       ctrl.editRecord = function(record){
           console.log('edit record!', record);
       }
       ctrl.orderByKey = 'firstName';
       ctrl.reverse = false;
       
    }
})