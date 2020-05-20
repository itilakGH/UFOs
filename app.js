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