angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.radioOptions = [{
            value: 0,
            description: 'Option One'
        },{
            value: 1,
            description: 'Option Two'
        },{
            value: 2,
            description: 'Option Three'
        }];
        ctrl.selectedRadioOption = 1;
        ctrl.onChange = function(){
            console.log('radio selection changed!', ctrl.selectedRadioOption);
        }
    }
})