//Import the object necessary to use the routes from express
const { Router } = require('express');
const router = Router();

const User = require('../models/User');

//Create a new route with the method GET
router.get('/', (req, res) => {
    res.send(`Hello World!`);
});

router.post('/signup', (req, res) =>{
    res.send(`New user`);
});

// Export the object that contains the routes
module.exports = router;