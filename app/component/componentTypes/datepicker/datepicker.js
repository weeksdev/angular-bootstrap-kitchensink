angular.module('app').component('datepicker',{
    templateUrl: 'app/template/componentTypes/datepicker/datepicker.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.dateValue = new Date();
        ctrl.onChange = function(){
            console.log('Date Selected: ' + ctrl.dateValue);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('datepicker');
        };
    }
})