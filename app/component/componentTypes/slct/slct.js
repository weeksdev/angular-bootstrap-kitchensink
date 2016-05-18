angular.module('app').component('slct',{
    templateUrl: 'app/template/componentTypes/slct/slct.html',
    controller: function(modalCodeFactory){
        var ctrl = this;
        ctrl.selectOptions = [{
            id: 0,
            name: 'Option 1'
        },{
            id: 1,
            name: 'Option 2'
        },{
            id: 2,
            name: 'Option 3'
        }]
        ctrl.selectedOption = 1;
        ctrl.onChange = function(){
            console.log('selection changed!', ctrl.selectedOption);
        }
        ctrl.showCode = function(){
            modalCodeFactory.showCode('slct');
        }
    }
})