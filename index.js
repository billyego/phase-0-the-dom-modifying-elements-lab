// Select the "main" element and remove it
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new h1 element with desired text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your name

// Append the new h1 element to the body
document.body.append(newHeader);
