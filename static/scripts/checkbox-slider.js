// Get the checkbox element
const checkbox = document.getElementById("checkbox");

// Get the audio element
const clickSound = document.getElementById("clickSound");

// Function to play the sound
function playSound() {
  clickSound.play();
  // Save the checkbox state in local storage
  localStorage.setItem("checkboxState", checkbox.checked);
}

// Function to load the checkbox state from local storage
function loadCheckboxState() {
  const savedState = localStorage.getItem("checkboxState");
  if (savedState === "true") {
    checkbox.checked = true;
  } else if (savedState === "false") {
    checkbox.checked = false;
  }
}

// Attach the 'playSound' function to the 'click' event of the checkbox
checkbox.addEventListener("click", playSound);

// Load the checkbox state when the page loads
loadCheckboxState();
