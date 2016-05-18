angular.module('app').component('checkbox',{
    templateUrl: 'app/template/componentTypes/checkbox/checkbox.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.checkboxValue = false;
        ctrl.onChange = function(){
            console.log('Checkbox Value Changed!', ctrl.checkboxValue);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('checkbox');
        }
    }
})