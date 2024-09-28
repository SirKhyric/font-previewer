const textElement = document.getElementById('text');

// Get all the buttons
const buttons = document.querySelectorAll('.left-side button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the font-family from the button's data-font attribute
    const fontFamily = button.getAttribute('data-font');
    
    // Change the paragraph's font-family to the clicked button's font
    textElement.style.fontFamily = fontFamily;
  });
});