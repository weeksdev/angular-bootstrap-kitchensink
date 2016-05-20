angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(y){
        var ctrl = this;
        ctrl.sliderValue = 10;
    }
})