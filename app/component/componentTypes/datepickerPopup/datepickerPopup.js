angular.module('app').component('datepickerPopup',{
    templateUrl: 'app/template/componentTypes/datepickerPopup/datepickerPopup.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.dateValue = new Date();
        ctrl.datepicker = {
            opened: false
        };
        ctrl.showDatepicker = function(){
            ctrl.datepicker.opened = true;
        };
        ctrl.showCode = function(){
            modalCodeFactory.showCode('datepickerPopup');
        };
    }
})