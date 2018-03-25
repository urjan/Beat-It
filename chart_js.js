window.onload = function () {

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
	title :{
		text: "EKG trends"
	},
	axisY: {
		includeZero: false
	},      
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 80; // number of dataPoints visible at any point

var updateChart = function (count) {



	var e = 2.71828;
	var a = 0.2;
	var d = 1.4;
	var h = 3;
	var s = 0.05;
	var w = 0.02;

	count = count || 1;

	for (var j = 0; j < count; j++) {
		

	// yVal = a*(Math.pow(e,((-(x + d)^2) / (2*w))) + Math.pow(e,((-(x - d)^2) / (2*w)))) 
	// 		+ ((h - Math.abs(x / s) - x) * Math.pow(e,((-(7*x)^2) / 2)));

		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({
			x: xVal,
			y: next_val
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}