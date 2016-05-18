angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function () {
        var ctrl = this;
        ctrl.links = [{
            href: '#/link1',
            name: 'Link 1'
        }, {
                href: '#/link2',
                name: 'Link 2'
            }];
    }
});