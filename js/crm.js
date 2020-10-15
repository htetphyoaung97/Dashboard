$(document).ready(function () {

	    $('#hunberger-icon').on('click', function () {
	        $('#sidebar').toggleClass('active');
	    });

	}); //<---- Dropdown ----->

window.onload = function () {

	var options = {
		animationEnabled: true,  
		title:{
			text: "Company Revenue by Year"
		},
		axisY: {
			title: "Revenue in USD",
			valueFormatString: "#0,,.",
			suffix: "mn",
			prefix: "$"
		},
		data: [{
			type: "area",
			markerSize: 5,
			xValueFormatString: "YYYY",
			yValueFormatString: "$#,##0.##",
			dataPoints: [
				{ x: new Date(2016, 0), y: 2289000 },
				{ x: new Date(2016, 0), y: 2830000 },
				{ x: new Date(2016, 0), y: 1009000 },
				{ x: new Date(2016, 0), y: 1840000 },
				{ x: new Date(2017, 0), y: 1396000 },
				{ x: new Date(2017, 0), y: 2613000 },
				{ x: new Date(2017, 0), y: 1821000 },
				{ x: new Date(2017, 0), y: 1000000 },
				{ x: new Date(2018, 0), y: 1397000 },
				{ x: new Date(2018, 0), y: 1506000 },
				{ x: new Date(2018, 0), y: 1798000 },
				{ x: new Date(2018, 0), y: 2386000 },
				{ x: new Date(2019, 0), y: 4704000},
				{ x: new Date(2019, 0), y: 4926000 },
				{ x: new Date(2019, 0), y: 1394000 },
				{ x: new Date(2019, 0), y: 972000 },
				{ x: new Date(2020, 0), y: 1140000 }
			]
		}]
	};
	$("#revenueData").CanvasJSChart(options);

	var options = {
		title: {
			text: "Number of Order List in Website"
		},
		axisY: {
			includeZero: true
		},
		data: [{
			type: "column",
			yValueFormatString: "#,###",
			indexLabel: "{y}",
	      	color: "#546BC1",
			dataPoints: [
				{ label: "Home", y: 196 },
				{ label: "Gallery", y: 263 },
				{ label: "Dashboards", y: 134 },
				{ label: "Docs", y: 216 },
				{ label: "Support", y: 174 },
				{ label: "Blog", y: 122 },
				{ label: "Others", y: 182 }
			]
		}]
	};
	$("#orderData").CanvasJSChart(options);

	function updateChart() {
		var performance, deltaY, yVal;
		var dps = options.data[0].dataPoints;
		for (var i = 0; i < dps.length; i++) {
			deltaY = Math.round(2 + Math.random() * (-2 - 2));
			yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
			dps[i].y = yVal;
		}
		options.data[0].dataPoints = dps;
		$("#orderData").CanvasJSChart().render();
	};
	updateChart();

	setInterval(function () { updateChart() }, 500);

	var options = {
		title: {
			text: "User Order List Data"
		},
		data: [{
				type: "pie",
				startAngle: 45,
				showInLegend: "true",
				legendText: "{label}",
				indexLabel: "{label} ({y})",
				yValueFormatString:"#,##0.#"%"",
				dataPoints: [
					{ label: "Mobile", y: 36 },
					{ label: "Email Marketing", y: 31 },
					{ label: "Delivery", y: 7 },
					{ label: "Twitter", y: 7 },
					{ label: "Facebook", y: 6 },
					{ label: "Google", y: 10 },
					{ label: "Others", y: 3 }
				]
		}]
	};
	$("#userData").CanvasJSChart(options);

	var dataPoints = [];

	var options = {
		theme: "light2",
		title: {
			text: "Number of Active Users in Website"
		},
		data: [{
			type: "spline",
			dataPoints: dataPoints
		}]
	};

	$("#user-chart").CanvasJSChart(options);
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
		$("#user-chart").CanvasJSChart().render();
		setTimeout(updateData, 1500);
	}

	function updateData() {
		$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + xValue + "&ystart=" + yValue + "&length=" + newDataCount + "type=json", addData);
	}

	}
