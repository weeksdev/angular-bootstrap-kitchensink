angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.inputValue = 'Hello World';
        ctrl.onChange = function(){
            console.log('Text Area Value Changed!', ctrl.inputValue);
        }
    }
})