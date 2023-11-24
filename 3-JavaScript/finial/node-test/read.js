// readFileExample.js

// Import the fs module
const fs = require('fs');

// Specify the file path
const filePath = 'newFile.txt';

// Read the contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Display the contents of the file
  console.log('File Contents:', data);
});
