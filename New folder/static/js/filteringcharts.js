

d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {

    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var crop = dropdownMenu.property("value");

    url_data = "http://127.0.0.1:5000/cropdata/api";

    d3.json(url_data).then(data => {
        // console.log(data);
        item_crop = data.filter(row => row.commodity === crop)
        item_value = item_crop.map(row => row.value)
        item_volume = item_crop.map(row => row.volume)
        item_years = item_crop.map(row => row.year)
        item_price = item_crop.map(row => row.avgprice)
        item_temps = item_crop.map(row => row.avgtemperature)
        item_rain = item_crop.map(row => row.totalprecipitation)
        console.log(item_crop)



        var mychartvalue = document.getElementById('myChartvalue');

        let mychartvalue_ = new Chart(mychartvalue, {
            type: 'line',
            data: {
                labels: item_years,
                datasets: [{
                    label: "Value $",
                    data: item_value,
                    backgroundColor: 'green'
                }]
            },
        });

        var mychartvol = document.getElementById('myChartvol');

        let chart2 = new Chart(mychartvol, {
            type: 'line',
            data: {
                labels: item_years,
                datasets: [{
                    label: "Crop Volume",
                    data: item_volume,
                    backgroundColor: 'orange'
                }
                ]
            },
        })

        var mychartrain = document.getElementById('myChartrain');

        let chart3 = new Chart(mychartrain, {
            type: 'bar',
            data: {
                labels: item_years,
                datasets: [{
                    label: "Rain",
                    data: item_rain,
                    backgroundColor: 'blue'
                }
                ]
            },
        })

        var mycharttemp = document.getElementById('myCharttemps');

        let chart4 = new Chart(mycharttemp, {
            type: 'line',
            data: {
                labels: item_years,
                datasets: [{
                    label: "Temp",
                    data: item_temps,
                    backgroundColor: 'red'
                }
                ]
            }

        })
    })
}