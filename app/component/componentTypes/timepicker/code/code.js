angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.selectedTime = new Date();
        ctrl.onChange = function () {
            console.log('selection changed!', ctrl.selectedTime);
        }
    }
})