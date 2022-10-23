//11.2.4 Storyboarding
//Align the Code
// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// 11.5.1 Introduction to Dynamic Tables
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");
    //11.5.2 Add forEach to Your Table | 1st loop for <tr>
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //Loop Through Data Rows | 2nd loop for <td>
        Object.values(dataRow).forEach((val) => {
            //insert row
            let cell = row.append("td");
            //d3 function | holds only each value from the object.
            cell.text(val);
            }
        );
    });
}
// 11.5.3 Add Filters
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// 11.5.4 Use the “If” Statement
// Check to see if a date was entered and filter the
// data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

// Build the Filtered Table
// Rebuild the table using the filtered data
// @NOTE: If no date was entered, then filteredData will
// just be the original tableData.
        buildTable(filteredData);
}
//Listen for the Event
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
//Build the Final Table
// Build the table when the page loads
buildTable(tableData);