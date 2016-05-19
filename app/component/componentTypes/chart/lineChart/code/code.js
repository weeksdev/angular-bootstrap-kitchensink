angular.module('app').component('componentName', {
    templateUrl: 'path/to/component-name.html',
    controller: function ($scope) {
        var ctrl = this;
        ctrl.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Sales (In Millions)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            }]
        };
        ctrl.randomIntFromInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        ctrl.updateData = function () {
            ctrl.data.datasets[0].data = [];
            for(var i = 0; i < 7; i++){
                ctrl.data.datasets[0].data.push(ctrl.randomIntFromInterval(1, 30));
            }
            ctrl.chart.data = ctrl.data;
            ctrl.chart.update();
        }
        var ctx = document.getElementById('line-chart');
        ctrl.chart = new Chart(ctx, {
            type: 'line',
            data: ctrl.data
        });
    }
});