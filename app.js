angular.module('app', ['ngComponentRouter', 'ui.bootstrap', 'rzModule', 'mentio'])

.value('$routerRootComponent', 'app')

.component('app', {
    templateUrl: 'app.html',
    $routeConfig: [
        { path: '/home', name: 'Home', component: 'home', useAsDefault: true },
        { path: '/table', name: 'BasicTable', component: 'basicTable' },
        { path: '/navbar', name: 'NavBar', component: 'navbar' },
        { path: '/button', name: 'Btn', component: 'btn' },
        { path: '/input', name: 'Inpt', component: 'inpt' },
        { path: '/password', name: 'Password', component: 'password' },
        { path: '/checkbox', name: 'Checkbox', component: 'checkbox' },
        { path: '/textarea', name: 'Textarea', component: 'txtarea' },
        { path: '/radio', name: 'Radio', component: 'radio' },
        { path: '/select', name: 'Slct', component: 'slct' },
        { path: '/typeahead', name: 'Typeahead', component: 'typeahead' },
        { path: '/timepicker', name: 'Timepicker', component: 'timepicker' },
        { path: '/table-with-search', name: 'BasicTableWithSearch', component: 'basicTableWithSearch' },
        { path: '/chart/line-chart', name: 'LineChart', component: 'lineChart' },
        { path: '/chart/bar-chart', name: 'BarChart', component: 'barChart' },
        { path: '/modal', name: 'Modal', component: 'modal' },
        { path: '/file-input', name: 'FileInput', component: 'fileInput' },
        { path: '/slider', name: 'Slider', component: 'slider' },
        { path: '/accordian', name: 'Accordian', component: 'accordian' },
        { path: '/alert', name: 'Alert', component: 'alert' },
        { path: '/datepicker', name: 'DatePicker', component: 'datepicker' },
        { path: '/datepicker-popup', name: 'DatePicker Popup', component: 'datepickerPopup' },
        { path: '/tree', name: 'Tree', component: 'tree' },
        { path: '/tree-with-selection', name: 'TreeWithSelection', component: 'treeWithSelection' },
        { path: '/tabs', name: 'Tabs', component: 'tabs' },
        { path: '/advanced-table', name: 'AdvancedTable', component: 'advancedTable' },
        { path: '/mention', name: 'Mention', component: 'mention' }
    ],
    controller: function ($http) {
        var ctrl = this;
        ctrl.links = [];
    }
})
.directive('contenteditable', ['$sce', function ($sce) {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model

            // Specify how UI should be updated
            ngModel.$render = function () {
                element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
            };

            // Listen for change events to enable binding
            element.on('blur keyup change', function () {
                scope.$evalAsync(read);
            });
            read(); // initialize

            // Write data to the model
            function read() {
                var html = element.html();
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if (attrs.stripBr && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    };
}]);