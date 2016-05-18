angular.module('app').component('btn', {
    templateUrl: 'app/template/componentTypes/btn/btn.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.buttonClicked = function(){
            alert('Button Clicked!');
        };
        ctrl.showCode = function(){
            modalCodeFactory.showCode('btn');
        }
    }
})