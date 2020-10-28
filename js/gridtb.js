// window.onload = function () {

// //Better to construct options first and then pass it as a parameter
// 	var options = {
// 		animationEnabled: true,
// 		title: {
// 			text: "Mobile Phones Used For",                
// 			fontColor: "Peru"
// 		},	
// 		axisY: {
// 			tickThickness: 0,
// 			lineThickness: 0,
// 			valueFormatString: " ",
// 			includeZero: true,
// 			gridThickness: 0                    
// 		},
// 		axisX: {
// 			tickThickness: 0,
// 			lineThickness: 0,
// 			labelFontSize: 18,
// 			labelFontColor: "Peru"				
// 		},
// 		data: [{
// 			indexLabelFontSize: 26,
// 			toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
// 			indexLabelPlacement: "inside",
// 			indexLabelFontColor: "white",
// 			indexLabelFontWeight: 600,
// 			indexLabelFontFamily: "Verdana",
// 			color: "#62C9C3",
// 			type: "bar",
// 			dataPoints: [
// 				{ y: 21, label: "21%", indexLabel: "Asus RGO" },
// 				{ y: 25, label: "25%", indexLabel: "Poco" },
// 				{ y: 33, label: "33%", indexLabel: "Vivo" },
// 				{ y: 36, label: "36%", indexLabel: "Oppo" },
// 				{ y: 42, label: "42%", indexLabel: "Hawei" },
// 				{ y: 49, label: "49%", indexLabel: "Realme" },
// 				{ y: 50, label: "50%", indexLabel: "Xiaomi" },
// 				{ y: 55, label: "55%", indexLabel: "Samsung" },
// 				{ y: 61, label: "61%", indexLabel: "iPhone" }
// 			]
// 		}]
// 	};

// 	$("#chartContainer").CanvasJSChart(options);
// 	}
	var clients = [
	        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
	        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
	        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
	        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
	        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false },
	        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
	        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
	        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
	        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
	        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false },
	        { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
	        { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
	        { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
	        { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
	        { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
	    ];
	 
	    var countries = [
	        { Name: "", Id: 0 },
	        { Name: "United States", Id: 1 },
	        { Name: "Canada", Id: 2 },
	        { Name: "United Kingdom", Id: 3 }
	    ];
	 
	$(function() {

		$("#jsGrid").jsGrid({
	        width: "100%",
	        height: "400px",
	 
	        inserting: true,
	        editing: true,
	        sorting: true,
	        paging: true,
	 
	        data: clients,
	 
	        fields: [
	            { name: "Name", type: "text", width: 150, validate: "required" },
	            { name: "Age", type: "number", width: 50 },
	            { name: "Address", type: "text", width: 200 },
	            { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
	            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
	            { type: "control" }
	        ]
	    });

	});
