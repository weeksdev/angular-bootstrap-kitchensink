angular.module('app').component('inpt',{
    templateUrl: 'app/template/componentTypes/inpt/inpt.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.inputValue = 'Hello World';
        ctrl.onChange = function(){
            console.log('Input Value Changed!', ctrl.inputValue);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('inpt');
        }
    }
})