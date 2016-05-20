angular.module('app',['ngComponentRouter','ui.bootstrap','rzModule'])

.value('$routerRootComponent', 'app')

.component('app',{
    templateUrl: 'app.html',
    $routeConfig:[
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
    ],
    controller: function($http){
        var ctrl = this;
        ctrl.links = [];
    }
});