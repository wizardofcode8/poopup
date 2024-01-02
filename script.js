
// Function to handle the click event on paragraphs and headings
function showPopup(element) {
  // Display a prompt to get new text input
  const newText = prompt("Enter new text:", element.innerText);

  // Update the element with the new text if the user didn't cancel
  if (newText !== null) {
    element.innerText = newText;
  }
}

// Get all paragraphs and headings
const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

// Add click event listener to each element
elements.forEach(element => {
  element.addEventListener('click', () => showPopup(element));
});