// from data.js
var tableData = data;

// YOUR CODE HERE!
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear any existing data
    tbody.html("");

    // Next, loop through each object in the data file
    data.foreach((dataRow) => {
        // Append a row to the table body in html
        var row = tbody.append("tr");

        //loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            // add each value as a table cell
            cell.text(val);
        });
    });
}

function handleClick() {

    // Prevent the form from refreshing the page
    d3.event.preventDefault();

    // Grab the datatime value from filter
    var date = d3.select("#datatime").property("value");
    let filteredData = tableData;

    // Check if a date was entered and filter data by date
    if(date) {
        // apply `filter` to refine the needed information
        filteredData = filteredData.filter(row => row.datetime == date);
    }

    // rebuild the table with filtered data
    buildTable(filteredData);
}

// attach an event listener for the form button
d3.selectAll("#fillter-btn").on("click", handleClick);

// build the table for the initial page load
buildTable(tableData);