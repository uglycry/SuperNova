document.addEventListener('keydown', function(event) {
    // Check if Alt and ; (semicolon) keys are pressed
    if (event.altKey && event.key === ';') {
      // Get the popup element
      const popup = document.getElementById('settingsPopup');
      
      // Set the top to '50%' when Alt + ; is pressed
      popup.style.top = '50%';
    }
  });
  
  document.addEventListener('click', function(event) {
    // Check if the click is on the 'popup-close2' element
    if (event.target.classList.contains('popup-close2')) {
      // Get the popup element
      const popup = document.getElementById('settingsPopup');
      
      // Set the top to '134%' when 'popup-close2' is clicked
      popup.style.top = '134%';
    }
  });
  