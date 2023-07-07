const container = document.getElementById("grid-container");
const resetButton = document.getElementById("resetButton");

let gridRowCount = 1;
let gridColumnCount = 1;
let originalGridRowCount = gridRowCount;
let originalGridColumnCount = gridColumnCount;

let isMouseDown = false; // Variable to track mouse button state

// Event handler functions
function handleMouseDown() {
  isMouseDown = true;
  this.style.backgroundColor = "black";
}

function handleMouseOver() {
  if (isMouseDown) {
    this.style.backgroundColor = "black";
  }
}

function handleMouseUp() {
  isMouseDown = false;
}

// Function to create the grid based on user input
function createGrid() {
  // Clear existing grid
  container.innerHTML = "";

  // Update grid row and column count
  gridRowCount = parseInt(slider.value) || originalGridRowCount;
  gridColumnCount = parseInt(slider.value) || originalGridColumnCount;

  // Calculate the square size based on the grid count
  const maxSquareSize = 50; // Maximum size of the grid square
  const minSquareSize = 7; // Minimum size of the grid square
  const squareCount = Math.max(gridRowCount, gridColumnCount);
  const squareSize = Math.max(
    minSquareSize,
    Math.min(maxSquareSize, Math.floor(maxSquareSize / squareCount))
  );

  // Create a loop to generate rows
  for (let i = 0; i < gridRowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridColumnCount; j++) {
      const column = document.createElement("div");
      column.classList.add("column");

      column.style.width = `${squareSize}px`;
      column.style.height = `${squareSize}px`;

      column.addEventListener("mousedown", handleMouseDown);
      column.addEventListener("mouseover", handleMouseOver);
      column.addEventListener("mouseup", handleMouseUp);

      row.appendChild(column);
    }

    container.appendChild(row);
  }
}

function resetGrid() {
  const squares = document.querySelectorAll(".column");

  // Reset the background color of each square
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
}

//Slider variables
const slider = document.getElementById("gridSizeInput");
const sliderValue = document.getElementById("sliderValue");

slider.value = 1;

// Update the slider value display as the user slides the slider
slider.addEventListener("input", () => {
  const formattedValue = `${slider.value}x${slider.value}`;
  sliderValue.textContent = formattedValue;
  createGrid(); // Call createGrid to update the grid with the new size
});

// Event listener for the Reset Grid button click
resetButton.addEventListener("click", resetGrid);

// Call createGrid() to generate the default grid on page load
createGrid();

const gridCheckbox = document.getElementById("gridCheckbox");
const gridContainer = document.querySelector("#grid-container");

gridCheckbox.addEventListener("change", () => {
  gridContainer.classList.toggle("no-border", !gridCheckbox.checked);
});

