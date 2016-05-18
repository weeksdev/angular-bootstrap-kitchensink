angular.module('app').component('txtarea',{
    templateUrl: 'app/template/componentTypes/txtarea/txtarea.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.inputValue = 'Hello World';
        ctrl.onChange = function(){
            console.log('Text Area Value Changed!', ctrl.inputValue);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('txtarea');
        }
    }
})