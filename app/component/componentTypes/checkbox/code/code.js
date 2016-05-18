angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.checkboxValue = false;
        ctrl.onChange = function(){
            console.log('Checkbox Value Changed!', ctrl.checkboxValue);
        };
    }
})