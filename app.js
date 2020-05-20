// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Creating a function for a table
function buildTable(data) {
    // First, clearing out any existing data
    tbody.html("");

    // Next, looping through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a rpw to the table body
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    
    });

}

function handleClick() {
    // Grab the datetime valie from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep the row where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: if no data was entered, then filterData will just be the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

