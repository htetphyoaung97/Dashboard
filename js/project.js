window.onload = function () {

	var options = {
		animationEnabled: true,
		title: {
			text: "Task Progress"
		},
		data: [{
			type: "doughnut",
			innerRadius: "40%",
			showInLegend: true,
			legendText: "{label}",
			indexLabel: "{label}: #percent%",
			dataPoints: [
				{ label: "Google Play Stores", y: 6492917 },
				{ label: "Apple Stores", y: 7380554 },
				{ label: "Tap Tap", y: 1610846 },
				{ label: "APK Pure", y: 950875 },
				{ label: "All other outlets", y: 900000 }
			]
		}]
	};
	$("#task-pg").CanvasJSChart(options);

	var options = {
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: "Bug Progress"
		},
		legend:{
			horizontalAlign: "right",
			verticalAlign: "center"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name}",
			legendText: "{name} (#percent%)",
			indexLabelPlacement: "inside",
			dataPoints: [
				{ y: 6566.4, name: "Play Store" },
				{ y: 2599.2, name: "Apple Store" },
				{ y: 1231.2, name: "APK Pure" },
				{ y: 1368, name: "Tap Tap" },
				{ y: 684, name: "Others"},
				{ y: 1231.2, name: "Utilities" }
			]
		}]
	};
	$("#bug-pg").CanvasJSChart(options);

	}