angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.buttonClicked = function(){
            alert('Button Clicked!');
        };
    }
})