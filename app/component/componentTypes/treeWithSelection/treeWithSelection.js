angular.module('app').component('treeWithSelection', {
    templateUrl: 'app/template/componentTypes/treeWithSelection/treeWithSelection.html',
    controller: function (modalCodeFactory) {
        var ctrl = this;
        ctrl.tree = [{
            name: 'Tree Item 1',
            closed: true,
            nodes: [{
                name: 'Tree Item 1-2'
            }]
        }, {
                name: 'Tree Item 2'
            }, {
                name: 'Tree Item 3',
                nodes: [{
                    name: 'Tree Item 3-1'
                }, {
                        name: 'Tree Item 3-2',
                        closed: true,
                        nodes: [{
                            name: 'Tree Item 3-2-1'
                        }]
                    }]
            }];
        ctrl.toggle = function (node) {
            node.closed = !node.closed;
        }
        ctrl.getIcon = function (node) {
            if (node.nodes && node.nodes.length > 0) {
                if (node.closed) {
                    return 'fa-folder';
                } else {
                    return 'fa-folder-open';
                }
            } else {
                return 'fa-file';
            }
        }
        ctrl.allowMultiSelect = false;
        ctrl.selectedNodes = [];
        ctrl.toggleSelectNode = function (node) {
            node.selected = !node.selected;
            if (!ctrl.allowMultiSelect) {
                if (ctrl.selectedNodes.length > 0) {
                    ctrl.selectedNodes.forEach(function(node){ node.selected = false});
                }
                //reset the selected nodes if multiselect isn't enabled
                ctrl.selectedNodes = [];
            }
            if (node.selected) {
                ctrl.selectedNodes.push(node);
            } else {
                var i = ctrl.selectedNodes.indexOf(node);
                if (i != -1) {
                    ctrl.selectedNodes.splice(i, 1);
                }
            }
            console.log('Selected Node(s):', ctrl.selectedNodes);
        }
        ctrl.showCode = function () {
            modalCodeFactory.showCode('treeWithSelection');
        }
    }
})