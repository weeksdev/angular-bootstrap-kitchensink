angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function ($uibModal) {
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
        }
    }
});