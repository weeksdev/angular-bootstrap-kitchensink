angular.module('app').factory('componentTypesFactory', function () {
    return {
        getComponents: function () {
            return [{
                href: '#/table',
                name: 'Basic Table',
                alias: 'grid,tr,th'
            }, {
                    href: '#/table-with-search',
                    name: 'Basic Table + Search',
                    alias: 'grid,tr,th'
                }, {
                    href: '#/navbar',
                    name: 'NavBar',
                    alias: 'header'
                }, {
                    href: '#/button',
                    name: 'Button'
                }, {
                    href: '#/input',
                    name: 'Input',
                    alias: 'textfield'
                }, {
                    href: '#/password',
                    name: 'Password'
                }, {
                    href: '#/checkbox',
                    name: 'Checkbox'
                }, {
                    href: '#/textarea',
                    name: 'Textarea'
                }, {
                    href: '#/radio',
                    name: 'Radio'
                }, {
                    href: '#/select',
                    name: 'Select',
                    alias: 'combo'
                }, {
                    href: '#/typeahead',
                    name: 'Typeahead',
                    alias: 'combo'
                }, {
                    href: '#/timepicker',
                    name: 'Timepicker',
                    alias: 'date,time'
                }, {
                    href: '#/chart/line-chart',
                    name: 'Line Chart'
                }, {
                    href: '#/chart/bar-chart',
                    name: 'Bar Chart'
                }, {
                    href: '#/modal',
                    name: 'Modal',
                    alias: 'popup'
                }, {
                    href: '#/file-input',
                    name: 'File Input',
                    alias: 'upload'
                }, {
                    href: '#/slider',
                    name: 'Slider'
                }, {
                    href: '#/accordian',
                    name: 'Accordian'
                }, {
                    href: '#/alert',
                    name: 'Alert'
                }, {
                    href: '#/datepicker',
                    name: 'Datepicker',
                    alias: 'datetime'
                }, {
                    href: '#/datepicker-popup',
                    name: 'Datepicker Popup',
                    alias: 'datetime'
                }, {
                    href: '#/tree',
                    name: 'Tree'
                }, {
                    href: '#/tree-with-selection',
                    name: 'Tree w Selection'
                }];
        }
    };
})