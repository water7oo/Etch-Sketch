// Get the container element
const container = document.getElementById("grid-container");

// Create a loop to generate rows
for (let i = 0; i < 16; i++) {
  // Create a new row element
  const row = document.createElement("div");
  row.classList.add("row"); // Optional: Add a CSS class to the row element

  // Create a loop to generate columns within the row
  for (let j = 0; j < 16; j++) {
    // Create a new column element
    const column = document.createElement("div");
    column.classList.add("column"); // Optional: Add a CSS class to the column element

    var isMouseDown = false;
    // Add event listeners for mouse actions
    column.addEventListener("mousedown", () => {
      isMouseDown = true;
      column.style.backgroundColor = "black"; // Change the background color when mouse button is pressed
    });

    column.addEventListener("mouseover", () => {
      if (isMouseDown) {
        column.style.backgroundColor = "black"; // Change the background color on hover while mouse button is pressed
      }
    });

    column.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    // Append the column to the current row
    row.appendChild(column);
  }

  // Append the row to the container
  container.appendChild(row);
}

function newGrid() {
  console.log("The button is working");
}
