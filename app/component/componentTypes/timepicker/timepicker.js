angular.module('app').component('timepicker', {
    templateUrl: 'app/template/componentTypes/timepicker/timepicker.html',
    controller: function (modalCodeFactory) {
        var ctrl = this;
        ctrl.selectedTime = new Date();
        ctrl.onChange = function () {
            console.log('selection changed!', ctrl.selectedTime);
        }
        ctrl.showCode = function () {
            modalCodeFactory.showCode('timepicker');
        }
    }
})