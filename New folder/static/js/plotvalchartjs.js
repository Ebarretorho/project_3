
url_data = "http://127.0.0.1:5000/cropdata/api";

d3.json(url_data).then(data => {
    // console.log(data);
    corns = data.filter(row => row.commodity === 'CORN')
    corn_value = corns.map(row => row.value)
    corn_volume = corns.map(row => row.volume)
    corn_years = corns.map(row => row.year)
    corn_price = corns.map(row => row.avgprice)
    corn_temps = corns.map(row => row.avgtemperature)
    corn_rain = corns.map(row => row.totalprecipitation)

    barleys = data.filter(row => row.commodity === 'BARLEY')
    barley_value = barleys.map(row => row.value)
    barley_volume = barleys.map(row => row.volume)
    barley_years = barleys.map(row => row.year)
    barley_price = barleys.map(row => row.avgprice)
    barley_temps = barleys.map(row => row.avgtemperature)
    barley_rain = barleys.map(row => row.totalprecipitation)

    cottons = data.filter(row => row.commodity === 'COTTON')
    cotton_value = cottons.map(row => row.value)
    cotton_volume = cottons.map(row => row.volume)
    cotton_years = cottons.map(row => row.year)
    cotton_price = cottons.map(row => row.avgprice)
    cotton_temps = cottons.map(row => row.avgtemperature)
    cotton_rain = cottons.map(row => row.totalprecipitation)


    hays = data.filter(row => row.commodity === 'HAY')
    hay_value = hays.map(row => row.value)
    hay_volume = hays.map(row => row.volume)
    hay_years = hays.map(row => row.year)
    hay_price = hays.map(row => row.avgprice)
    hay_temps = hays.map(row => row.avgtemperature)
    hay_rain = hays.map(row => row.totalprecipitation)

    oats = data.filter(row => row.commodity === 'OATS')
    oats_value = oats.map(row => row.value)
    oats_volume = oats.map(row => row.volume)
    oats_years = oats.map(row => row.year)
    oats_price = oats.map(row => row.avgprice)
    oats_temps = oats.map(row => row.avgtemperature)
    oats_rain = oats.map(row => row.totalprecipitation)

    rices = data.filter(row => row.commodity === 'RICE')
    rice_value = rices.map(row => row.value)
    rice_volume = rices.map(row => row.volume)
    rice_years = rices.map(row => row.year)
    rice_price = rices.map(row => row.avgprice)
    rice_temps = rices.map(row => row.avgtemperature)
    rice_rain = rices.map(row => row.totalprecipitation)

    sorghums = data.filter(row => row.commodity === 'SORGHUM')
    sorghum_value = sorghums.map(row => row.value)
    sorghum_volume = sorghums.map(row => row.volume)
    sorghum_years = sorghums.map(row => row.year)
    sorghum_price = sorghums.map(row => row.avgprice)
    sorghum_temps = sorghums.map(row => row.avgtemperature)
    sorghum_rain = sorghums.map(row => row.totalprecipitation)

    soybeans = data.filter(row => row.commodity === 'SOYBEANS')
    soybeans_value = soybeans.map(row => row.value)
    soybeans_volume = soybeans.map(row => row.volume)
    soybeans_years = soybeans.map(row => row.year)
    soybeans_price = soybeans.map(row => row.avgprice)
    soybeans_temps = soybeans.map(row => row.avgtemperature)
    soybeans_rain = soybeans.map(row => row.totalprecipitation)

    wheats = data.filter(row => row.commodity === 'WHEAT')
    wheat_value = wheats.map(row => row.value)
    wheat_volume = wheats.map(row => row.volume)
    wheat_years = wheats.map(row => row.year)
    wheat_price = wheats.map(row => row.avgprice)
    wheat_temps = wheats.map(row => row.avgtemperature)
    wheat_rain = wheats.map(row => row.totalprecipitation)

    // Data trace array
    //var corn = { x: corn_years, y: corn_value, type: "scatter", name: "Corn" };
    //console.log(corn);
    //var barley = { x: barley_years, y: barley_value, mode: "scatter", name: "Barley" };
    //console.log(barley);
    //var cotton = { x: cotton_years, y: cotton_value, mode: "scatter", name: "Cotton" };
    //console.log(cotton);
    //var hay = { x: hay_years, y: hay_value, mode: "scatter", name: "Hay" };
    //console.log(hay);
    //var oats_ = { x: oats_years, y: oats_value, mode: "scatter", name: "Oats" };
    //console.log(oats_);
    //var rice = { x: rice_years, y: rice_value, mode: "scatter", name: "Rice" };
    //console.log(rice);
    // var sorghum = { x: sorghum_years, y: sorghum_value, mode: "scatter", name: "Sorghum" };
    // console.log(sorghum);
    // var soybeans_ = { x: soybeans_years, y: soybeans_value, mode: "scatter", name: "Soybeans" };
    // console.log(soybeans_);
    // var wheat = { x: wheat_years, y: wheat_value, mode: "scatter", name: "Wheat" };
    // console.log(wheat);

    //var traceData = [corn, barley, cotton, hay, oats_, rice, sorghum, soybeans_, wheat];

    var mychartvalue = document.getElementById('myChartvalue1');

    let mychartvalue_ = new Chart(mychartvalue, {
        type: 'line',
        data: {
            labels: corn_years,
            datasets: [{
                label: "Corn $",
                data: corn_value,
                backgroundColor: 'blue'
            },
            {
                label: "Wheat $",
                data: wheat_value,
                backgroundColor: 'green'
            },
            {
                label: "Rice $",
                data: rice_value,
                backgroundColor: 'red'
            },
            {
                label: "Hay $",
                data: hay_value,
                backgroundColor: 'yellow'
            },
            {
                label: "Oats $",
                data: oats_value,
                backgroundColor: 'orange'
            },
            {
                label: "Cotton $",
                data: cotton_value,
                backgroundColor: 'purple'
            },
            {
                label: "Sorghum $",
                data: sorghum_value,
                backgroundColor: 'pink'
            },
            {
                label: "Soybeans $",
                data: soybeans_value,
                backgroundColor: 'brown'
            },
            {
                label: "Barley $",
                data: wheat_value,
                backgroundColor: 'grey'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Revenue YoY'
                }
            }
        }
    });

    var mychartvol = document.getElementById('myChartvol1');

    let chart2 = new Chart(mychartvol, {
        type: 'line',
        data: {
            labels: corn_years,
            datasets: [{
                label: "Corn Vol",
                data: corn_volume,
                backgroundColor: 'blue'
            },
            {
                label: "Wheat Vol",
                data: wheat_volume,
                backgroundColor: 'green'
            },
            {
                label: "Rice Vol",
                data: rice_volume,
                backgroundColor: 'red'
            },
            {
                label: "Hay Vol",
                data: hay_volume,
                backgroundColor: 'yellow'
            },
            {
                label: "Oats Vol",
                data: oats_volume,
                backgroundColor: 'orange'
            },
            {
                label: "Cotton Vol",
                data: cotton_volume,
                backgroundColor: 'purple'
            },
            {
                label: "Sorghum Vol",
                data: sorghum_volume,
                backgroundColor: 'pink'
            },
            {
                label: "Soybeans Vol",
                data: soybeans_volume,
                backgroundColor: 'brown'
            },
            {
                label: "Barley Vol",
                data: wheat_volume,
                backgroundColor: 'grey'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Production Volume YoY'

                }
            }
        }
    });

    var mychartrain = document.getElementById('myChartrain1');

    let chart3 = new Chart(mychartrain, {
        type: 'line',
        data: {
            labels: corn_years,
            datasets: [{
                label: "Inces",
                data: corn_rain,
                backgroundColor: 'blue'
            },
            {
                label: "Inches",
                data: wheat_rain,
                backgroundColor: 'green'
            },
            {
                label: "Inches",
                data: rice_rain,
                backgroundColor: 'red'
            },
            {
                label: "Inches",
                data: hay_rain,
                backgroundColor: 'yellow'
            },
            {
                label: "Inches",
                data: oats_rain,
                backgroundColor: 'orange'
            },
            {
                label: "Inches",
                data: cotton_rain,
                backgroundColor: 'purple'
            },
            {
                label: "Inches",
                data: sorghum_rain,
                backgroundColor: 'pink'
            },
            {
                label: "Inches",
                data: soybeans_rain,
                backgroundColor: 'brown'
            },
            {
                label: "Inches",
                data: wheat_rain,
                backgroundColor: 'grey'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Precipitation by year',
                }
            }
        }
    });

    var mycharttemp = document.getElementById('myCharttemps1');

    let chart4 = new Chart(mycharttemp, {
        type: 'line',
        data: {
            labels: corn_years,
            datasets: [{
                label: "Temp",
                data: corn_temps,
                backgroundColor: 'blue'
            },
            {
                label: "Temp",
                data: wheat_temps,
                backgroundColor: 'green'
            },
            {
                label: "Temp",
                data: rice_temps,
                backgroundColor: 'red'
            },
            {
                label: "Temp",
                data: hay_temps,
                backgroundColor: 'yellow'
            },
            {
                label: "Temp",
                data: oats_temps,
                backgroundColor: 'orange'
            },
            {
                label: "Temp",
                data: cotton_temps,
                backgroundColor: 'purple'
            },
            {
                label: "Temp",
                data: sorghum_temps,
                backgroundColor: 'pink'
            },
            {
                label: "Temp",
                data: soybeans_temps,
                backgroundColor: 'brown'
            },
            {
                label: "Temp",
                data: wheat_temps,
                backgroundColor: 'grey'
            }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
                ,
                title: {
                    display: true,
                    text: 'Avg Temperature F°'

                }
            }

        }
    })
});