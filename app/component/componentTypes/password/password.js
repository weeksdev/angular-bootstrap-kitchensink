angular.module('app').component('password',{
    templateUrl: 'app/template/componentTypes/password/password.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.inputValue = 'Hello World';
        ctrl.onChange = function(){
            console.log('Input Value Changed!', ctrl.inputValue);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('password');
        }
    }
})