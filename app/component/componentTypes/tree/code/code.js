angular.module('app').component('componentName',{
    templateUrl: 'path/to/component-name.html',
    controller: function(){
        var ctrl = this;
        ctrl.tree = [{
            name: 'Tree Item 1',
            closed: true,
            nodes:[{
                name: 'Tree Item 1-2'
            }]
        },{
            name: 'Tree Item 2'
        },{
            name: 'Tree Item 3',
            nodes:[{
                name: 'Tree Item 3-1'
            },{
                name: 'Tree Item 3-2',
                closed: true,
                nodes:[{
                    name: 'Tree Item 3-2-1'
                }]
            }]
        }];
        ctrl.toggle = function(node){
            node.closed = !node.closed;
        }
        ctrl.getIcon = function(node){
            if(node.nodes && node.nodes.length > 0){
                if(node.closed){
                    return 'fa-folder';
                }else{
                    return 'fa-folder-open';
                }
            }else{
                return 'fa-file';
            }
        }
    }
})