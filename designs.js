function makeGrid(event) {
  // preventing the default function of the submit button that causes the page to reload
  event.preventDefault();
  // assigning the users choice to variables. height, width and color
  let height = document.getElementById("inputHeight").value;
  let width = document.querySelector("#inputWidth").value;
  let colorPicker = document.querySelector("#colorPicker");
  // assigning the users initial color choice to a variable
  let color = colorPicker.value;
  // setting the color variable to a different color when user chooses a different color
  colorPicker.addEventListener("input", function () {
    color = colorPicker.value;
  });
  //  Selecting the html table element
  let table = document.querySelector("#pixelCanvas");
  // creating a table row for each height value and appending said row to the table element
  for (let i = 0; i <= height; i++) {
    let tableRow = table.insertRow(i);
    // appending table cells to each table row according to user input
    for (let i = 0; i < width; i++) {
      let tableCol = document.createElement("td");
      // assigning a class value to each cells for ease of quering
      tableCol.className = "columns";
      tableRow.appendChild(tableCol);
    }
  }
  // query selecting all rows in the table
  let rows = document.querySelectorAll(".columns");
  // looping through each rows and adding an event listener to each cells
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      rows[i].style.backgroundColor = color;
    });
  }
  // adding an event listener to the submit button to refresh the table when clicked
  submitButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
// adding event listener to the submit button to call the makeGrid function
const submitButton = document.querySelector("#button");
submitButton.addEventListener("click", makeGrid);
