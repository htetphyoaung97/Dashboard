$(document).ready(function () {

	    $('#hunberger-icon').on('click', function () {
	        $('#sidebar').toggleClass('active');
	    });

	}); //<---- Dropdown ----->

window.onload = function () {

	var options = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Monthly Sales Data"
		},
		axisX: {
			valueFormatString: "MMM"
		},
		axisY: {
			prefix: "$",
			labelFormatter: addSymbols
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [
			{
				type: "column",
				name: "Actual Sales",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 20000 },
					{ x: new Date(2017, 1), y: 25000 },
					{ x: new Date(2017, 2), y: 30000 },
					{ x: new Date(2017, 3), y: 70000, indexLabel: "High Renewals" },
					{ x: new Date(2017, 4), y: 40000 },
					{ x: new Date(2017, 5), y: 60000 },
					{ x: new Date(2017, 6), y: 55000 },
					{ x: new Date(2017, 7), y: 33000 },
					{ x: new Date(2017, 8), y: 45000 },
					{ x: new Date(2017, 9), y: 30000 },
					{ x: new Date(2017, 10), y: 50000 },
					{ x: new Date(2017, 11), y: 35000 }
				]
			},
			{
				type: "line",
				name: "Expected Sales",
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 32000 },
					{ x: new Date(2017, 1), y: 37000 },
					{ x: new Date(2017, 2), y: 40000 },
					{ x: new Date(2017, 3), y: 52000 },
					{ x: new Date(2017, 4), y: 45000 },
					{ x: new Date(2017, 5), y: 47000 },
					{ x: new Date(2017, 6), y: 42000 },
					{ x: new Date(2017, 7), y: 43000 },
					{ x: new Date(2017, 8), y: 41000 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 50000 },
					{ x: new Date(2017, 11), y: 45000 }
				]
			},
			{
				type: "area",
				name: "Profit",
				markerBorderColor: "white",
				markerBorderThickness: 2,
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 4000 },
					{ x: new Date(2017, 1), y: 7000 },
					{ x: new Date(2017, 2), y: 12000 },
					{ x: new Date(2017, 3), y: 40000 },
					{ x: new Date(2017, 4), y: 20000 },
					{ x: new Date(2017, 5), y: 35000 },
					{ x: new Date(2017, 6), y: 33000 },
					{ x: new Date(2017, 7), y: 20000 },
					{ x: new Date(2017, 8), y: 25000 },
					{ x: new Date(2017, 9), y: 16000 },
					{ x: new Date(2017, 10), y: 29000 },
					{ x: new Date(2017, 11), y: 20000 }
				]
			}]
	};
	$("#yearsale").CanvasJSChart(options);

	function addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

		if (order > suffixes.length - 1)
			order = suffixes.length - 1;

		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}

	var options = {
		title: {
			text: "Number of Active Users in Website"
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
	$("#activeUser").CanvasJSChart(options);

	function updateChart() {
		var performance, deltaY, yVal;
		var dps = options.data[0].dataPoints;
		for (var i = 0; i < dps.length; i++) {
			deltaY = Math.round(2 + Math.random() * (-2 - 2));
			yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
			dps[i].y = yVal;
		}
		options.data[0].dataPoints = dps;
		$("#activeUser").CanvasJSChart().render();
	};
	updateChart();

	setInterval(function () { updateChart() }, 500);

}