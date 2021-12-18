// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  // Your code goes here!
  event.preventDefault();
  let color = document.querySelector("#colorPicker").value;
  let table = document.querySelector("#pixelCanvas");
  let height = document.getElementById("inputHeight").value;
  let width = document.querySelector("#inputWidth").value;
  for (let i = 0; i <= height; i++) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let i = 0; i < width; i++) {
      let tableCol = document.createElement("td");
      tableCol.className = "columns";
      tableRow.appendChild(tableCol);
    }
  }
  let rows = document.querySelectorAll(".columns");
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      rows[i].style.backgroundColor = color;
    });
  }
  submitButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
const submitButton = document.querySelector("#button");
submitButton.addEventListener("click", makeGrid);
