angular.module('app').component('modal', {
    templateUrl: 'app/template/componentTypes/modal/modal.html',
    controller: function ($uibModal, modalCodeFactory) {
        var ctrl = this;
        ctrl.openModal = function(){
            var modal = $uibModal.open({
                animation: true,
                template: document.getElementById('modalContent').innerHTML,
                controller: function($scope){
                    $scope.ok = function(){
                        modal.dismiss();
                    }
                    $scope.cancel = function(){
                        modal.dismiss();
                    }
                }
            });
        };
        ctrl.showCode = function(){
            modalCodeFactory.showCode('modal');
        };
    }
});