// Import expressjs
const express = require('express');

// Create an instance from the object express
const app = express();

// express will use the file in this path to use the routes
app.use(require('./routes/index'));

// Initialize the server in port 3000
app.listen(3000);
// Show a message in the console
console.log(`Listen on port 3000`);