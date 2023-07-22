document.addEventListener('DOMContentLoaded', (event) => {
  console.log('dom loaded');


  // Functions
  const checkbox = document.getElementById("checkbox");
  const clickSound = document.getElementById("clickSound");
  const particlesCanvas = document.getElementById("canvas");



  // Function to play the sound
  function playSound() {
    console.log("play");
    clickSound.play();
    // Save the checkbox state in local storage
    localStorage.setItem("checkboxState", checkbox.checked);

    // ( Delete canvas and particles.js when enabled, re add those elements when disabled code here ) \\

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

  checkbox.addEventListener("click", playSound);

  loadCheckboxState();
})


