angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.dateValue = new Date();
        ctrl.datepicker = {
            opened: false
        };
        ctrl.showDatepicker = function(){
            ctrl.datepicker.opened = true;
        };
    }
})