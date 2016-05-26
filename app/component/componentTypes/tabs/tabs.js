angular.module('app').component('tabs',{
    templateUrl: 'app/template/componentTypes/tabs/tabs.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.tabs = [{
            header: 'Tab 1',
            content: 'Welcome to tab 1',
            disabled: false
        },{
            header: 'Tab 2',
            content: 'Welcome to tab 2'
        },{
            header: 'Tab 3',
            content: 'Welcome to tab 3',
            disabled: true
        }];
        
        ctrl.showCode = function(){
            modalCodeFactory.showCode('tabs');
        }
    }
})