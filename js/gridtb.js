window.onload = function () {

//Better to construct options first and then pass it as a parameter
	var options = {
		animationEnabled: true,
		title: {
			text: "Mobile Phones Used For",                
			fontColor: "Peru"
		},	
		axisY: {
			tickThickness: 0,
			lineThickness: 0,
			valueFormatString: " ",
			includeZero: true,
			gridThickness: 0                    
		},
		axisX: {
			tickThickness: 0,
			lineThickness: 0,
			labelFontSize: 18,
			labelFontColor: "Peru"				
		},
		data: [{
			indexLabelFontSize: 26,
			toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
			indexLabelFontWeight: 600,
			indexLabelFontFamily: "Verdana",
			color: "#62C9C3",
			type: "bar",
			dataPoints: [
				{ y: 21, label: "21%", indexLabel: "Asus RGO" },
				{ y: 25, label: "25%", indexLabel: "Poco" },
				{ y: 33, label: "33%", indexLabel: "Vivo" },
				{ y: 36, label: "36%", indexLabel: "Oppo" },
				{ y: 42, label: "42%", indexLabel: "Hawei" },
				{ y: 49, label: "49%", indexLabel: "Realme" },
				{ y: 50, label: "50%", indexLabel: "Xiaomi" },
				{ y: 55, label: "55%", indexLabel: "Samsung" },
				{ y: 61, label: "61%", indexLabel: "iPhone" }
			]
		}]
	};

	$("#chartContainer").CanvasJSChart(options);
	}