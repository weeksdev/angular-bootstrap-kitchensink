angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function($filter){
        var ctrl = this;
        ctrl.records = [{
            firstName: 'John',
            lastName: 'Lennon',
            instrument: 'Guitar',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1969-01-01')
        }, {
            firstName: 'Ringo',
            lastName: 'Starr',
            instrument: 'Drums',
            membershipStartYear: new Date('1962-01-01'),
            membershipEndYear: new Date('1970-01-01')
        }, {
            firstName: 'Pete',
            lastName: 'Best',
            instrument: 'Drums',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1962-01-01')
        }, {
            firstName: 'Paul',
            lastName: 'McCartney',
            instrument: 'Bass',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1970-01-01')
        }, {
            firstName: 'George',
            lastName: 'Harrison',
            instrument: 'Lead Guitar',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1970-01-01')
        }, {
            firstName: 'Stuart',
            lastName: 'Sutcliffe',
            instrument: 'Bass',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1961-01-01')
        }];
        ctrl.selectedBeatle = {
            firstName: 'George',
            lastName: 'Harrison',
            instrument: 'Lead Guitar',
            membershipStartYear: new Date('1960-01-01'),
            membershipEndYear: new Date('1970-01-01')
        };
        ctrl.searchBeatles = function(searchValue){
            if(searchValue){
                return $filter('filter')(ctrl.records, function(record){
                    return record.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
                    || record.lastName.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
                });
            }
        }
        ctrl.onChange = function () {
            console.log('selection changed!', ctrl.selectedBeatle);
        }
    }
})