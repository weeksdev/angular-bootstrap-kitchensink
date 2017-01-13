angular.module('app').factory('modalCodeFactory', function ($http, $q, $uibModal, $rootScope) {
    return {
        showCode: function (componentName) {
            var jsUrl = 'app/component/componentTypes/' + componentName + '/code/code.js';
            var htmlUrl = 'app/component/componentTypes/' + componentName + '/code/code.html';
            var jsFilePromise = $http.get(jsUrl);
            var htmlFilePromise = $http.get(htmlUrl);
            $q.all([jsFilePromise, htmlFilePromise]).then(function (responses) {
                var jsCode = responses[0].data;
                var htmlCode = responses[1].data;
                $rootScope.$broadcast('broadcast:open-modal',{
                    jsCode: jsCode,
                    htmlCode: htmlCode
                });
            });
        }
    };
});