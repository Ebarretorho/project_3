
url_data = "http://127.0.0.1:5000/cropdata/api";

d3.json(url_data).then(data => {
    // console.log(data);
    corns = data.filter(row => row.commodity === 'CORN')
    corn_value = corns.map(row => row.value)
    corn_years = corns.map(row => row.year);

    barleys = data.filter(row => row.commodity === 'BARLEY')
    barley_value = barleys.map(row => row.value)
    barley_years = barleys.map(row => row.year);

    cottons = data.filter(row => row.commodity === 'COTTON')
    cotton_value = cottons.map(row => row.value)
    cotton_years = cottons.map(row => row.year);

    hays = data.filter(row => row.commodity === 'HAY')
    hay_value = hays.map(row => row.value)
    hay_years = hays.map(row => row.year);

    oats = data.filter(row => row.commodity === 'OATS')
    oats_value = oats.map(row => row.value)
    oats_years = oats.map(row => row.year);

    rices = data.filter(row => row.commodity === 'RICE')
    rice_value = rices.map(row => row.value)
    rice_years = rices.map(row => row.year);

    sorghums = data.filter(row => row.commodity === 'SORGHUM')
    sorghum_value = sorghums.map(row => row.value)
    sorghum_years = sorghums.map(row => row.year);

    soybeans = data.filter(row => row.commodity === 'SOYBEANS')
    soybeans_value = soybeans.map(row => row.value)
    soybeans_years = soybeans.map(row => row.year);

    wheats = data.filter(row => row.commodity === 'WHEAT')
    wheat_value = wheats.map(row => row.value)
    wheat_years = wheats.map(row => row.year);

    // Data trace array
    var corn = { x: corn_years, y: corn_value, type: "scatter", name: "Corn" };
    console.log(corn);
    var barley = { x: barley_years, y: barley_value, mode: "scatter", name: "Barley" };
    console.log(barley);
    var cotton = { x: cotton_years, y: cotton_value, mode: "scatter", name: "Cotton" };
    console.log(cotton);
    var hay = { x: hay_years, y: hay_value, mode: "scatter", name: "Hay" };
    console.log(hay);
    var oats_ = { x: oats_years, y: oats_value, mode: "scatter", name: "Oats" };
    console.log(oats_);
    var rice = { x: rice_years, y: rice_value, mode: "scatter", name: "Rice" };
    console.log(rice);
    var sorghum = { x: sorghum_years, y: sorghum_value, mode: "scatter", name: "Sorghum" };
    console.log(sorghum);
    var soybeans_ = { x: soybeans_years, y: soybeans_value, mode: "scatter", name: "Soybeans" };
    console.log(soybeans_);
    var wheat = { x: wheat_years, y: wheat_value, mode: "scatter", name: "Wheat" };
    console.log(wheat);

    var traceData = [corn, barley, cotton, hay, oats_, rice, sorghum, soybeans_, wheat];

    // Apply the group barmode to the layout
    let layout = {
        title: "Yearly production ($ value) per crop",
        xaxis: {
            title: 'Year'
          },
        yaxis: {
            title: 'Value ($)'
          }
    };
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plotval", traceData, layout);
});  