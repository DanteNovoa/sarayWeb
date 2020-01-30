//Import the object necessary to use the routes from express
const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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
    const userMailer = 'tuCorreo';
    const passMailer = 'pass';
    const newContact = new Contact({ nombre, tituloAsunto, Correo, Mensaje });
    await newContact.save();

    if (userMailer != 'tuCorreo' && passMailer != 'pass')
    {
        const service = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: userMailer,
                pass: passMailer
            }
        });
    
        const email = {
            from: Correo,
            to: 'luisghtz@outlook.com',
            subject: nombre + ": " + tituloAsunto,
            text: Mensaje
        }
    
        service.sendMail(email, (err, info) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("Email enviado");
            }
        })
    }

    res.send("Ok");
});

router.get('/getallcontacts', (req, res) => {
    const all = Contact.find({}, (err, data) => {
        if (err)
        {
            console.log(err);
            res.send("An error has occurred, please try later")
        }
        res.json(data);
    });
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