// server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Get the file path for the requested URL
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If there is an error, respond with a 404 Not Found status
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
      return;
    }

    // Set the content type of the response based on the file extension
    const contentType = path.extname(filePath) === '.html' ? 'text/html' : 'text/plain';
    res.writeHead(200, {'Content-Type': contentType});

    // Send the file content as the response body
    res.end(data);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
