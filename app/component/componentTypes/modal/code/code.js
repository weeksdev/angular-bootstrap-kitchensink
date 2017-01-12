angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function () {
        var ctrl = this;
        ctrl.showModal = false;
        
        ctrl.openModal = function(){
            ctrl.showModal = true;
        }
        ctrl.hideModal = function(){
            ctrl.showModal = false;
        }
        
    }
});