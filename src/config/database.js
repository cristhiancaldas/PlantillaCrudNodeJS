const mongoose = require('mongoose');

//const URI = 'mongodb+srv://apirest:apirest@cluster0-rqsae.mongodb.net/tallerninja?';
const URI = 'mongodb://cristhian:mendoza87@ds111963.mlab.com:11963/nodetest';

mongoose.connect(URI)
    .then(db => console.log('DB CONNECT'))
    .catch(err => console.log(err));

module.exports = mongoose;