// Display an alert to confirm the script was loaded
alert('External script loaded successfully!');

// Change the background color of the page to confirm script execution
document.body.style.backgroundColor = "lightblue";

// Log the document cookies (for testing purposes)
console.log('Cookies:', document.cookie);

// Create and load an image from your GitHub repository
var img = document.createElement('img');
img.src = 'https://raw.githubusercontent.com/MeWs-byte/TEST/main/hackercat.jpg';
img.style.position = 'fixed';
img.style.top = '10px';
img.style.right = '10px';
img.style.width = '150px';
img.style.height = '150px';
document.body.appendChild(img);
