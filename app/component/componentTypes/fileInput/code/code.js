angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function($scope){
        var ctrl = this;
        ctrl.selectedFile = '';
        ctrl.fileChanged = function (el) {
            if(el && el.files && el.files.length > 0){
                ctrl.selectedFile = el.files[0].name.toString();
                $scope.$apply();
            }else{
                ctrl.selectedFile = '';
            }
        }
    }
})