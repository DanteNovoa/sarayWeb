//Api required to connect to mongodb
const mongoose = require('mongoose');

// Url necessary to connect to mongo db
mongoose.connect('mongodb://localhost/saray-app', {
    //Additional configuration needed by deprecation
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    /*
     * If the connection is successful a message is showed in the console
     * otherwise the error is showed in the console
     */
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));