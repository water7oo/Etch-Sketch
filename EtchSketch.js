const container = document.getElementById("grid-container");
const resetButton = document.getElementById("resetButton");
const colorPicker = document.getElementById("colorPicker");
const eraserButton = document.getElementById("eraserButton");

let gridRowCount = 64;
let gridColumnCount = 64;
let originalGridRowCount = gridRowCount;
let originalGridColumnCount = gridColumnCount;
let selectedColor = colorPicker.value;
let isMouseDown = false;
let isErasing = false;

// Event handler functions
function handleMouseDown() {
  isMouseDown = true;
  if (isErasing) {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = selectedColor;
  }
}

function handleMouseOver() {
  if (isMouseDown) {
    if (isErasing) {
      this.style.backgroundColor = "";
    } else {
      this.style.backgroundColor = selectedColor;
    }
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

  // Calculate the initial square size based on the grid count
  const maxSquareSize = 250; // Maximum size of the grid square
  const minSquareSize = 20; // Minimum size of the grid square
  const initialSquareSize = Math.max(
    minSquareSize,
    Math.min(maxSquareSize, Math.floor(maxSquareSize / gridRowCount))
  );

  // Calculate the reduction factor for square size
  const reductionFactor =
    Math.max(gridRowCount, gridColumnCount) / gridRowCount;

  // Create a loop to generate rows
  for (let i = 0; i < gridRowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridColumnCount; j++) {
      const column = document.createElement("div");
      column.classList.add("column");

      const squareSize = Math.max(
        minSquareSize,
        Math.floor(initialSquareSize / reductionFactor)
      );

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

function toggleEraser() {
  isErasing = !isErasing;
  if (isErasing) {
    eraserButton.classList.add("active");
  } else {
    eraserButton.classList.remove("active");
  }
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

// Event listener for the color picker change event
colorPicker.addEventListener("change", () => {
  selectedColor = colorPicker.value;
});

// Event listener for the eraser button click
eraserButton.addEventListener("click", toggleEraser);

// Call createGrid() to generate the default grid on page load
createGrid();

const gridCheckbox = document.getElementById("gridCheckbox");
const gridContainer = document.querySelector("#grid-container");

gridCheckbox.addEventListener("change", () => {
  gridContainer.classList.toggle("no-border", !gridCheckbox.checked);
});
