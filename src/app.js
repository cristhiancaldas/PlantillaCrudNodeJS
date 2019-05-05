/*CREACIÓN DE NUESTRO SERVIDOR*/
const express=require('express');
const path=require('path');
const app = express();

const mongoose=require('../src/config/database');

const userControll = require('./routes/user.routes');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({extended: false}))

app.use('/', userControll);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});