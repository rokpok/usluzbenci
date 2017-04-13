angular.module('usluzbenciApp', ['chart.js'])
  .controller('MasterController', function() {
    this.events = [];
    this.status = "ni v službi";

    this.checkin = function(text) {
      var event = {date: new Date(), type: 'checkin'};
      events.push(event);
    }

    this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.series = ['Series A', 'Series B'];
    this.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    this.options = {
      scales:{
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      },
      legend: {
        display: true
      },
    };
  });
