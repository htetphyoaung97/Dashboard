$(document).ready(function () {

	    $('#hunberger-icon').on('click', function () {
	        $('#sidebar').toggleClass('active');
	    });

	}); //<---- Dropdown ----->

window.onload = function () {

	var options = {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: "Monthly Sales Comparison by Location"
		},
		axisY: {
			title: "Revenue (in Pound Sterling)",
			valueFormatString: "#0",
			includeZero: true,
			suffix: "K",
			prefix: "£"
		},
		legend: {
			cursor: "pointer",
			itemclick: toogleDataSeries
		},
		toolTip: {
			shared: true
	    },
		data: [{
			type: "area",
			name: "London",
			markerSize: 5,
			showInLegend: true,
			xValueFormatString: "MMMM",
			yValueFormatString: "£#0K",
			dataPoints: [
				{ x: new Date(2020, 0), y: 12 },
				{ x: new Date(2020, 1), y: 15 },
				{ x: new Date(2020, 2), y: 12 },
				{ x: new Date(2020, 3), y: 17 },
				{ x: new Date(2020, 4), y: 20 },
				{ x: new Date(2020, 5), y: 21 },
				{ x: new Date(2020, 6), y: 24 },
				{ x: new Date(2020, 7), y: 19 },
				{ x: new Date(2020, 8), y: 22 },
				{ x: new Date(2020, 9), y: 25 },
				{ x: new Date(2020, 10), y: 21 },
				{ x: new Date(2020, 11), y: 19 }
			]
		}, {
			type: "area",
			name: "Manchester",
			markerSize: 5,
			showInLegend: true,
			yValueFormatString: "£#0K",
			dataPoints: [
				{ x: new Date(2020, 0), y: 8 },
				{ x: new Date(2020, 1), y: 12 },
				{ x: new Date(2020, 2), y: 9 },
				{ x: new Date(2020, 3), y: 11 },
				{ x: new Date(2020, 4), y: 15 },
				{ x: new Date(2020, 5), y: 12 },
				{ x: new Date(2020, 6), y: 13 },
				{ x: new Date(2020, 7), y: 9 },
				{ x: new Date(2020, 8), y: 7 },
				{ x: new Date(2020, 9), y: 14 },
				{ x: new Date(2020, 10), y: 18 },
				{ x: new Date(2020, 11), y: 14 }
			]
		}]
	};
	$("#commerceChart").CanvasJSChart(options);

	function toogleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}

	var options = {
		title: {
			text: "1 Year Badges Payment"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "1st Month",  y: 10  },
				{ label: "2nd Month", y: 15  },
				{ label: "4th Month", y: 25  },
				{ label: "6th Month",  y: 30  },
				{ label: "1 Year",  y: 50  }
			]
		}
		]
	};

	$("#badges").CanvasJSChart(options);

	var dataPoints = [];

	var options = {
		theme: "light2",
		title: {
			text: "Weekly Badges"
		},
		data: [{
			type: "spline",
			dataPoints: dataPoints
		}]
	};

	$("#weeklyChart").CanvasJSChart(options);
	updateData();

	// Initial Values
	var xValue = 0;
	var yValue = 10;
	var newDataCount = 6;

	function addData(data) {
		if (newDataCount != 1) {
			$.each(data, function (key, value) {
				dataPoints.push({ x: value[0], y: parseInt(value[1]) });
				xValue++;
				yValue = parseInt(value[1]);
			});
			newDataCount = 1;
		} else {
			//dataPoints.shift();
			dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
			xValue++;
			yValue = parseInt(data[0][1]);
		}
		$("#weeklyChart").CanvasJSChart().render();
		setTimeout(updateData, 1500);
	}

	function updateData() {
		$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + xValue + "&ystart=" + yValue + "&length=" + newDataCount + "type=json", addData);
	}

	}