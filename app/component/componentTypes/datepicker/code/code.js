angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.dateValue = new Date();
        ctrl.onChange = function(){
            console.log('Date Selected: ' + ctrl.dateValue);
        }
    }
})