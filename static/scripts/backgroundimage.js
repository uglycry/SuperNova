const imageUrlInput = document.getElementById("imageUrl");
let canvasElement = document.getElementById("canvas");

function changeBackground() {
  const imageUrl = imageUrlInput.value;
  if (!imageUrl) {
    alert("Please enter a valid image URL.");
    return;
  }

  // Remove the canvas from the DOM
  if (canvasElement) {
    canvasElement.parentNode.removeChild(canvasElement);
    canvasElement = null;
  }

  document.body.style.backgroundColor = "transparent";
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

function resetBackground() {
  // Check if the canvas element exists, and if not, create it and add it back to the DOM
  if (!canvasElement) {
    canvasElement = document.createElement("div");
    canvasElement.id = "canvas";
    document.body.appendChild(canvasElement);
  }

  document.body.style.backgroundColor = "#e0e0e0";
  document.body.style.backgroundImage = "none";
}
