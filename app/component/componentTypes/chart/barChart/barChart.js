angular.module('app').component('barChart', {
    templateUrl: 'app/template/componentTypes/chart/barChart/barChart.html',
    controller: function ($scope, modalCodeFactory) {
        var ctrl = this;
        ctrl.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            }]
        };
        ctrl.randomIntFromInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        ctrl.updateData = function () {
            ctrl.data.datasets[0].data = [];
            for (var i = 0; i < 7; i++) {
                ctrl.data.datasets[0].data.push(ctrl.randomIntFromInterval(1, 30));
            }
            ctrl.chart.data = ctrl.data;
            ctrl.chart.update();
        }
        var ctx = document.getElementById('bar-chart');
        ctrl.chart = new Chart(ctx, {
            type: 'bar',
            data: ctrl.data
        });
        ctrl.showCode = function () {
            modalCodeFactory.showCode('chart/barChart');
        }
    }
});