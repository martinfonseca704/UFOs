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