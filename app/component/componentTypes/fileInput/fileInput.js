angular.module('app').component('fileInput',{
    templateUrl: 'app/template/componentTypes/fileInput/fileInput.html',
    controller: function($scope, modalCodeFactory){
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
        
        ctrl.showCode = function(){
            modalCodeFactory.showCode('fileInput');
        }
        
    }
})