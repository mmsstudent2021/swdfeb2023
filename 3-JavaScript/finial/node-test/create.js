// createFileExample.js

// Import the fs module
const fs = require('fs');

// Specify the file path and content
const filePath = 'newFile.txt';
const fileContent = 'This is the content of the new file.';

// Write the content to the file
fs.writeFile(filePath, fileContent, 'utf8', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }

  console.log('File created successfully!');
});
