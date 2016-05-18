angular.module('app').factory('modalCodeFactory', function ($http, $q, $uibModal) {
    return {
        showCode: function (componentName) {
            var jsUrl = 'app/component/componentTypes/' + componentName + '/code/code.js';
            var htmlUrl = 'app/component/componentTypes/' + componentName + '/code/code.html';
            var jsFilePromise = $http.get(jsUrl);
            var htmlFilePromise = $http.get(htmlUrl);
            $q.all([jsFilePromise, htmlFilePromise]).then(function (responses) {
                console.log(responses);
                var jsCode = responses[0].data;
                var htmlCode = responses[1].data;
                var modal = $uibModal.open({
                    animation: true,
                    templateUrl: 'app/template/codeWindow.html',
                    width: 1000,
                    controller: function ($scope) {
                        $scope.jsCode = jsCode;
                        $scope.htmlCode = htmlCode;
                        $scope.ok = function () {
                            modal.dismiss();
                        }
                    }
                });

            });
        }
    };
});