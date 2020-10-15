
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
			text: "Actual vs Projected Sales"
		},
		axisX:{
			valueFormatString: "DD MMM"
		},
		axisY: {
			title: "Number of Sales",
			suffix: "K",
			minimum: 30
		},
		toolTip:{
			shared:true
		},  
		legend:{
			cursor:"pointer",
			verticalAlign: "bottom",
			horizontalAlign: "left",
			dockInsidePlotArea: true,
			itemclick: toogleDataSeries
		},
		data: [{
			type: "line",
			showInLegend: true,
			name: "Projected Sales",
			markerType: "square",
			xValueFormatString: "DD MMM, YYYY",
			color: "#F08080",
			yValueFormatString: "#,##0K",
			dataPoints: [
				{ x: new Date(2017, 10, 1), y: 63 },
				{ x: new Date(2017, 10, 2), y: 69 },
				{ x: new Date(2017, 10, 3), y: 65 },
				{ x: new Date(2017, 10, 4), y: 70 },
				{ x: new Date(2017, 10, 5), y: 71 },
				{ x: new Date(2017, 10, 6), y: 65 },
				{ x: new Date(2017, 10, 7), y: 73 },
				{ x: new Date(2017, 10, 8), y: 96 },
				{ x: new Date(2017, 10, 9), y: 84 },
				{ x: new Date(2017, 10, 10), y: 85 },
				{ x: new Date(2017, 10, 11), y: 86 },
				{ x: new Date(2017, 10, 12), y: 94 },
				{ x: new Date(2017, 10, 13), y: 97 },
				{ x: new Date(2017, 10, 14), y: 86 },
				{ x: new Date(2017, 10, 15), y: 89 }
			]
		},
		{
			type: "line",
			showInLegend: true,
			name: "Actual Sales",
			lineDashType: "dash",
			yValueFormatString: "#,##0K",
			dataPoints: [
				{ x: new Date(2017, 10, 1), y: 60 },
				{ x: new Date(2017, 10, 2), y: 57 },
				{ x: new Date(2017, 10, 3), y: 51 },
				{ x: new Date(2017, 10, 4), y: 56 },
				{ x: new Date(2017, 10, 5), y: 54 },
				{ x: new Date(2017, 10, 6), y: 55 },
				{ x: new Date(2017, 10, 7), y: 54 },
				{ x: new Date(2017, 10, 8), y: 69 },
				{ x: new Date(2017, 10, 9), y: 65 },
				{ x: new Date(2017, 10, 10), y: 66 },
				{ x: new Date(2017, 10, 11), y: 63 },
				{ x: new Date(2017, 10, 12), y: 67 },
				{ x: new Date(2017, 10, 13), y: 66 },
				{ x: new Date(2017, 10, 14), y: 56 },
				{ x: new Date(2017, 10, 15), y: 64 }
			]
		}]
	};
	$("#chartContainerLine").CanvasJSChart(options);

	function toogleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else{
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}

	var options = {
		animationEnabled: true,
		title: {
			text: "ACME Corporation Apparel Sales"
		},
		data: [{
			type: "doughnut",
			innerRadius: "40%",
			showInLegend: true,
			legendText: "{label}",
			indexLabel: "{label}: #percent%",
			dataPoints: [
				{ label: "Department Stores", y: 6492917 },
				{ label: "Discount Stores", y: 7380554 },
				{ label: "Stores for Men / Women", y: 1610846 },
				{ label: "Teenage Specialty Stores", y: 950875 },
				{ label: "All other outlets", y: 900000 }
			]
		}]
	};
	$("#chartContainerDonut").CanvasJSChart(options);

	var totalVisitors = 883000;
	var visitorsData  = {
		"New vs Returning Visitors": [{
			click: visitorsChartDrilldownHandler,
			cursor: "pointer",
			explodeOnClick: false,
			innerRadius: "75%",
			legendMarkerType: "square",
			name: "New vs Returning Visitors",
			radius: "100%",
			showInLegend: true,
			startAngle: 90,
			type: "doughnut",
			dataPoints: [
				{ y: 519960, name: "New Visitors", color: "#E7823A" },
				{ y: 363040, name: "Returning Visitors", color: "#546BC1" }
			]
		}],
		"New Visitors": [{
			color: "#E7823A",
			name: "New Visitors",
			type: "column",
			xValueFormatString: "MMM YYYY",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 33000 },
				{ x: new Date("1 Feb 2015"), y: 35960 },
				{ x: new Date("1 Mar 2015"), y: 42160 },
				{ x: new Date("1 Apr 2015"), y: 42240 },
				{ x: new Date("1 May 2015"), y: 43200 },
				{ x: new Date("1 Jun 2015"), y: 40600 },
				{ x: new Date("1 Jul 2015"), y: 42560 },
				{ x: new Date("1 Aug 2015"), y: 44280 },
				{ x: new Date("1 Sep 2015"), y: 44800 },
				{ x: new Date("1 Oct 2015"), y: 48720 },
				{ x: new Date("1 Nov 2015"), y: 50840 },
				{ x: new Date("1 Dec 2015"), y: 51600 }
			]
		}],
		"Returning Visitors": [{
			color: "#546BC1",
			name: "Returning Visitors",
			type: "column",
			xValueFormatString: "MMM YYYY",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 22000 },
				{ x: new Date("1 Feb 2015"), y: 26040 },
				{ x: new Date("1 Mar 2015"), y: 25840 },
				{ x: new Date("1 Apr 2015"), y: 23760 },
				{ x: new Date("1 May 2015"), y: 28800 },
				{ x: new Date("1 Jun 2015"), y: 29400 },
				{ x: new Date("1 Jul 2015"), y: 33440 },
				{ x: new Date("1 Aug 2015"), y: 37720 },
				{ x: new Date("1 Sep 2015"), y: 35200 },
				{ x: new Date("1 Oct 2015"), y: 35280 },
				{ x: new Date("1 Nov 2015"), y: 31160 },
				{ x: new Date("1 Dec 2015"), y: 34400 }
			]
		}]
	};

	var newVSReturningVisitorsOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "New VS Returning Visitors"
		},
		subtitles: [{
			text: "Click on Any Segment to Drilldown",
			backgroundColor: "#2eacd1",
			fontSize: 16,
			fontColor: "white",
			padding: 5
		}],
		legend: {
			fontFamily: "calibri",
			fontSize: 14,
			itemTextFormatter: function (e) {
				return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
			}
		},
		data: []
	};

	var visitorsDrilldownedChartOptions = {
		animationEnabled: true,
		theme: "light2",
		axisX: {
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2"
		},
		axisY: {
			gridThickness: 0,
			includeZero: false,
			labelFontColor: "#717171",
			lineColor: "#a2a2a2",
			tickColor: "#a2a2a2",
			lineThickness: 1
		},
		data: []
	};

	newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
	$("#chartContainerCircle").CanvasJSChart(newVSReturningVisitorsOptions);

	function visitorsChartDrilldownHandler(e) {
		e.chart.options = visitorsDrilldownedChartOptions;
		e.chart.options.data = visitorsData[e.dataPoint.name];
		e.chart.options.title = { text: e.dataPoint.name }
		e.chart.render();
		$("#backButton").toggleClass("invisible");
	}

	$("#backButton").click(function() { 
		$(this).toggleClass("invisible");
		newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
		$("#chartContainerCircle").CanvasJSChart(newVSReturningVisitorsOptions);
	});

	var options = {
		animationEnabled: true,
		title: {
			text: "GDP Growth Rate - 2016"
		},
		axisY: {
			title: "Growth Rate (in %)",
			suffix: "%"
		},
		axisX: {
			title: "Countries"
		},
		data: [{
			type: "column",
			yValueFormatString: "#,##0.0#"%"",
			dataPoints: [
				{ label: "Iraq", y: 10.09 },	
				{ label: "Turks & Caicos Islands", y: 9.40 },	
				{ label: "Nauru", y: 8.50 },
				{ label: "Ethiopia", y: 7.96 },	
				{ label: "Uzbekistan", y: 7.80 },
				{ label: "Nepal", y: 7.56 },
				{ label: "Iceland", y: 7.20 },
				{ label: "India", y: 7.1 }
				
			]
		}]
	};
	$("#chartContainerColum").CanvasJSChart(options);

} //<---grpah--->