angular.module('app').component('navbar', {
    templateUrl: 'app/template/componentTypes/navbar/navbar.html',
    controller: function (modalCodeFactory) {
        var ctrl = this;
        ctrl.links = [{
            href: '#/link1',
            name: 'Link 1'
        }, {
                href: '#/link2',
                name: 'Link 2'
            }];

        ctrl.showCode = function () {
            modalCodeFactory.showCode('navbar');
        };
    }
});