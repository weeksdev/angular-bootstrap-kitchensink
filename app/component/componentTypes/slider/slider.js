angular.module('app').component('slider',{
    templateUrl: 'app/template/componentTypes/slider/slider.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.sliderValue = 10;
        
        ctrl.showCode = function(){
            modalCodeFactory.showCode('slider');
        }
    }
})