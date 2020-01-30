//Import the object necessary to use the routes from express
const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Contact = require('../models/Contact');

//Create a new route with the method GET
router.get('/', (req, res) => {
    res.send(`Hello World!`);
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    
    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    
    res.status(200).json({ token });
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = User.findOne({ email });

    if (!user) return res.status(401).send(`The email doesn't exists`);

    if(user.password !== password) return res.status(401).send(`Email or password wrong`);

    const token = jwt.sign({_id: user._id}, 'secretKey');

    res.status(200).send({ token });
});

router.post('/sendcontact', async (req, res) => {
    const { nombre, tituloAsunto, Correo, Mensaje } = req.body;
    const newContact = new Contact({ nombre, tituloAsunto, Correo, Mensaje });
    await newContact.save();

    res.send("Ok");
});

router.get('/getcontacts', verifyToken, (req, res) => {

});

// Export the object that contains the routes
module.exports = router;

function verifyToken( req, res, next)
{
    if (!req.headers.authorization)
    {
        return res.status(401).send('Authorization not valid!');
    }

    const token = req.header.authorization.split(' ')[1];

    if (token === 'null')
    {
        return res.status(401).send('Authorization not valid!');
    }

    const payload = jwt.verify(token, 'secretKey');

    req.userId = payload._id;

    next();
}