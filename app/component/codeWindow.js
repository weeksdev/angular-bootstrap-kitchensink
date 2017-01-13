angular.module('app').component('codeWindow', {
    bindings:{
        openModal: '=',
        htmlCode: '=',
        jsCode: '='
    },
    templateUrl: 'app/template/codeWindow.html',
    controller: function ($http, $rootScope, $scope) {
        var ctrl = this;
        ctrl.showModal = false;
        ctrl.openModal = function () {
            ctrl.showModal = true;
        }
        ctrl.closeModal = function () {
            ctrl.showModal = false;
        }
        $scope.$on('broadcast:open-modal', function(event, data){
            ctrl.jsCode = data.jsCode;
            ctrl.htmlCode = data.htmlCode;
            ctrl.openModal();
        });
    }
});