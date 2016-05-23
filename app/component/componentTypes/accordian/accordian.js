angular.module('app').component('accordian',{
    templateUrl: 'app/template/componentTypes/accordian/accordian.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.showCode = function(){
            modalCodeFactory.showCode('accordian');
        }
    }
})