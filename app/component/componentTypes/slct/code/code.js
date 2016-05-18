angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.selectOptions = [{
            id: 0,
            name: 'Option 1'
        },{
            id: 1,
            name: 'Option 2'
        },{
            id: 2,
            name: 'Option 3'
        }]
        ctrl.selectedOption = 1;
        ctrl.onChange = function(){
            console.log('selection changed!', ctrl.selectedOption);
        }
    }
})