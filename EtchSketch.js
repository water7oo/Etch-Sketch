// Get the container element
const container = document.getElementById("grid-container");
let gridRowCount = 20;
let gridColumnCount = 20;

// Calculate the square size based on the grid size and container dimensions
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const minSquareSize = 20; // Minimum size of the grid square

// Calculate the maximum square size based on the container dimensions and the number of rows and columns
const maxSquareSize = Math.floor(
  Math.min(containerWidth / gridColumnCount, containerHeight / gridRowCount)
);

// Determine the actual square size based on the maximum and minimum sizes
const squareSize = Math.max(minSquareSize, maxSquareSize);

// Create a loop to generate rows
for (let i = 0; i < gridRowCount; i++) {
  // Create a new row element
  const row = document.createElement("div");
  row.classList.add("row"); // Optional: Add a CSS class to the row element

  for (let j = 0; j < gridColumnCount; j++) {
    const column = document.createElement("div");
    column.classList.add("column"); // Optional: Add a CSS class to the column element

    // Set the size of the columns based on the calculated square size
    column.style.width = `${squareSize}px`;
    column.style.height = `${squareSize}px`;

    var isMouseDown = false;
    // Add event listeners for mouse actions
    column.addEventListener("mousedown", () => {
      isMouseDown = true;
      column.style.backgroundColor = "black"; // Change the background color when the mouse button is pressed
    });

    column.addEventListener("mouseover", () => {
      if (isMouseDown) {
        column.style.backgroundColor = "black"; // Change the background color on hover while the mouse button is pressed
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

function newGrid() {}

//Add undo and redo
//Add eraser
//Add colors
//Fix grid size issue
//User brush size option
//User can save their work as png,jpeg, etc.
