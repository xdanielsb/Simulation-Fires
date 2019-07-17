var lastDate = 0;
var data = [];

console.log(data);

var options = {
   chart: {
       height: 250,
       type: 'line',
       animations: {
           enabled: true,
           easing: 'linear',
           dynamicAnimation: {
               speed: 10
           }
       },
       toolbar: {
           show: false
       },
       zoom: {
           enabled: false
       }
   },
   dataLabels: {
       enabled: false
   },
   stroke: {
       curve: 'smooth'
   },
   series: [{
       data: data
   }],
   title: {
       text: 'Temperatura Actual',
       align: 'left'
   },
   markers: {
       size: 0
   },
   xaxis: {
       type: 'category',
       min: 0,
       range: 100,
       labels:{
         show: false,
       }
   },
   yaxis: {
       min: 0,
       max: 100
   },
   legend: {
       show: false
   },
}


var optionsH = {
   chart: {
       height: 250,
       type: 'line',
       animations: {
           enabled: true,
           easing: 'linear',
           dynamicAnimation: {
               speed: 10
           }
       },
       toolbar: {
           show: false
       },
       zoom: {
           enabled: false
       }
   },
   dataLabels: {
       enabled: false
   },
   stroke: {
       curve: 'smooth'
   },
   series: [{
       data: data
   }],
   title: {
       text: 'Humo Actual',
       align: 'left'
   },
   markers: {
       size: 0
   },
   xaxis: {
       type: 'category',
       min: 0,
       range: 100,
       labels:{
         show: false,
       }
   },
   yaxis: {
       min: 0,
       max: 100
   },
   legend: {
       show: false
   },
}

var chart = new ApexCharts(
   document.querySelector("#chartT"),
   options
);


var chartH = new ApexCharts(
   document.querySelector("#chartH"),
   optionsH
);

chart.render();
chartH.render();

var initX=0, initY=17;
window.setInterval(function () {

   for(var i = 0; i< data.length -10; i++) {
     data[i].x  =0;
     data[i].y = 0;
   }
   var y = initY;
   var x = initX;
   data.push({x, y});
   initY =  initY + 1;
   initX =  initX + 10;
   chart.updateSeries([{
       data: data
   }])
   chartH.updateSeries([{
       data: data
   }])

}, 1000)
