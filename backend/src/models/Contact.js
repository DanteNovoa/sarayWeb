const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    nombre: String,
    tituloAsunto: String,
    Correo: String,
    Mensaje: String
}, {
    timestamps: true
});

module.exports = model('Contact', contactSchema);