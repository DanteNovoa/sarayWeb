//Import the object necessary to use the routes from express
const { Router } = require('express');
const router = Router();

//Create a new route with the method GET
router.get('/api', (req, res) => {
    res.send(`Hello World!`);
});

// Export the object that contains the routes
module.exports = router;