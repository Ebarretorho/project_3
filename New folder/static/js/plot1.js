
url_data = "http://127.0.0.1:5000/cropdata/api";

d3.json(url_data).then(data => {
  // console.log(data);
  corns = data.filter(row => row.commodity === 'CORN');
  console.log(corns);

  names = data.map(function (row) {
    return row.year
  });

  // Trace for the Greek Data
  let trace1 = {
    x: data.map(row => row.year),
    y: data.map(row => row.value),
    type: "bar"
  };


  // Data trace array
  let traceData = [trace1];

  // Apply the group barmode to the layout
  let layout = {
    title: "Podruction $$ per Year per Crop"
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);
});  