angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
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
            if(ctrl.floating){
                ctrl.floatingClass = 'floating';
            }else{
                ctrl.floatingClass = '';
            }
        };
    }
})