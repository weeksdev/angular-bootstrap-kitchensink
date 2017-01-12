angular.module('app').component('modal', {
    templateUrl: 'app/template/componentTypes/modal/modal.html',
    controller: function ($uibModal, modalCodeFactory) {
        var ctrl = this;
        ctrl.showModal = false;
        
        ctrl.openModal = function(){
            ctrl.showModal = true;
        }
        ctrl.hideModal = function(){
            ctrl.showModal = false;
        }
        
        ctrl.showCode = function(){
            modalCodeFactory.showCode('modal');
        };
    }
});