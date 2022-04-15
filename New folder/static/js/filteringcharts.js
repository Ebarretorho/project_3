// Function called by DOM changes
url_data = "http://127.0.0.1:5000/cropdata/api";

d3.json(url_data).then(data => {

    barleys = data.filter(row => row.commodity === 'BARLEY')
    barley_value = barleys.map(row => row.value)
    barley_volume = barleys.map(row => row.volume)
    barley_years = barleys.map(row => row.year)
    barley_price = barleys.map(row => row.avgprice)
    barley_temps = barleys.map(row => row.avgtemperature)
    barley_rain = barleys.map(row => row.totalprecipitation)

    var mychartvalue = document.getElementById('myChartvalue');
    var mychartvalue = new Chart(mychartvalue, {
        type: 'line',
        data: {
            labels: barley_years,
            datasets: [{
                label: "Revenue",
                data: barley_value,
                backgroundColor: 'green'
            }]
        }
    })
    var mychartvol = document.getElementById('myChartvol');
    var mychartvol = new Chart(mychartvol, {
        type: 'line',
        data: {
            labels: barley_years,
            datasets: [{
                label: "Crop Production",
                data: barley_volume,
                backgroundColor: 'orange'
            }
            ]
        },
    })
    var mychartrain = document.getElementById('myChartrain');
    var mychartrain = new Chart(mychartrain, {
        type: 'line',
        data: {
            labels: barley_years,
            datasets: [{
                label: "Rain (inches)",
                data: barley_rain,
                backgroundColor: 'blue'
            }
            ]
        },
    })
    var mycharttemp = document.getElementById('myCharttemps');
    var mycharttemp = new Chart(mycharttemp, {
        type: 'line',
        data: {
            labels: barley_years,
            datasets: [{
                label: "Temperature",
                data: barley_temps,
                backgroundColor: 'red'
            }]
        }
    })

    d3.selectAll("#selDataset").on("change", getData);

    function getData() {

        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var crop = dropdownMenu.property("value");

        // console.log(data);
        item_crop = data.filter(row => row.commodity === crop)
        item_value = item_crop.map(row => row.value)
        item_volume = item_crop.map(row => row.volume)
        item_years = item_crop.map(row => row.year)
        item_price = item_crop.map(row => row.avgprice)
        item_temps = item_crop.map(row => row.avgtemperature)
        item_rain = item_crop.map(row => row.totalprecipitation)
        console.log(item_crop)

        function updateChart() {
            mychartvalue.data.datasets[0].data = item_value;
            mychartvalue.update();
        }

        if (mychartvalue != null) {
            updateChart();
        };

        function updateChart2() {
            mychartvol.data.datasets[0].data = item_volume;
            mychartvol.update();
        }

        if (mychartvol != null) {
            updateChart2();
        };

        function updateChart3() {
            mychartrain.data.datasets[0].data = item_rain;
            mychartrain.update();
        }

        if (mychartrain != null) {
            updateChart3(mychartrain);
        };

        function updateChart4() {
            mycharttemp.data.datasets[0].data = item_temps;
            mycharttemp.update();
        }

        if (mycharttemp != null) {
            updateChart4();
        };
    }
});