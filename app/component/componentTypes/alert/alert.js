angular.module('app').component('alert',{
    templateUrl: 'app/template/componentTypes/alert/alert.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        
        ctrl.alert = {
            alertType: 'danger',
            alertMessage: 'Alert Here!'
        };
        ctrl.closeAlert = function(){
            ctrl.alert = null;
        };
        ctrl.floating = false;
        ctrl.floatingClass = '';
        ctrl.onChange = function(){
            console.log(ctrl.floating);
            if(ctrl.floating){
                ctrl.floatingClass = 'floating';
            }else{
                ctrl.floatingClass = '';
            }
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('alert');
        }
    }
})