angular.module('app').component('navigation',{
   templateUrl: 'app/template/navigation.html',
   controller: function($http, $filter){
       var ctrl = this;
       ctrl.links = [{
           href: '#/home',
           name: 'Home'
       }];
       ctrl.components = [{
           href: '#/table',
           name: 'Basic Table'
       },{
           href: '#/table-with-search',
           name: 'Basic Table + Search'
       },{
           href: '#/navbar',
           name: 'NavBar'
       },{
           href: '#/button',
           name: 'Button'
       },{
           href: '#/input',
           name: 'Input'
       },{
           href: '#/password',
           name: 'Password'
       },{
           href: '#/checkbox',
           name: 'Checkbox'
       },{
           href: '#/textarea',
           name: 'Textarea'
       },{
           href: '#/radio',
           name: 'Radio'
       },{
           href: '#/select',
           name: 'Select'
       },{
           href: '#/typeahead',
           name: 'Typeahead'
       },{
           href: '#/timepicker',
           name: 'Timepicker'
       },{
           href: '#/chart/line-chart',
           name: 'Line Chart'
       },{
           href: '#/chart/bar-chart',
           name: 'Bar Chart'
       },{
           href: '#/modal',
           name: 'Modal'
       },{
           href: '#/file-input',
           name: 'File Input'
       },{
           href: '#/slider',
           name: 'Slider'
       },{
           href: '#/accordian',
           name: 'Accordian'
       },{
           href: '#/alert',
           name: 'Alert'
       },{
           href: '#/datepicker',
           name: 'Datepicker'
       },{
           href: '#/datepicker-popup',
           name: 'Datepicker Popup'
       },{
           href: '#/tree',
           name: 'Tree'
       },{
           href: '#/tree-with-selection',
           name: 'Tree w Selection'
       }];
       ctrl.components = $filter('orderBy')(ctrl.components, 'name');
   } 
});