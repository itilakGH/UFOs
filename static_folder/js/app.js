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

var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  if (date) {

    filters["datetime"]=date

  } else {
    if (filters.hasOwnProperty("datetime")){
      delete filters["datetime"]
    }
  };

  if (city) {

    filters["city"]=city
  
  } else {
    if (filters.hasOwnProperty("city")){
      delete filters["city"]
    }
  };

  if (state) {

    filters["state"]=state
  
  } else {
    if (filters.hasOwnProperty("state")){
        delete filters["state"]
    }
  };

  if (country) {

    filters["country"]=country
  
  } else {
    if (filters.hasOwnProperty("country")){
        delete filters["country"]
    }
  };

  if (shape) {
 
    filters["shape"]=shape
  
  } else {
    if (filters.hasOwnProperty("shape")){
        delete filters["shape"]
    }
  };
    
    // Call function to apply all filters and rebuild the table
    //filterTable(filters);
    filterTable()

}



function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === filters[key]);
    });
    
    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }
  

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);

