angular.module('app').component('search', {
    templateUrl: 'app/template/search.html',
    controller: function (componentTypesFactory, $filter) {
        var ctrl = this;
        ctrl.components = componentTypesFactory.getComponents();
        ctrl.search = function (value) {
            ctrl.results = [];
            if (value) {
                ctrl.results = $filter('filter')(ctrl.components, function (comp) {
                    return comp.name.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    (comp.alias || '').toLowerCase().indexOf(value.toLowerCase()) >= 0;
                });
            }
        }
    }
})