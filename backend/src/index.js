// Import expressjs
const express = require('express');
const mongoose = require('./database');

// Create an instance from the object express
const app = express();

// express will use the file in this path to use the routes
app.use(require('./routes/index'));

// Initialize the server in port 3000
// nodemom module is installed to restart the server authomaticaly with each change
app.listen(3000);
// Show a message in the console
console.log(`Listen on port 3000`);