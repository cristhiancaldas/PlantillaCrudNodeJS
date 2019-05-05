const mongoose=require('mongoose');

const URI = 'mongodb+srv://apirest:apirest@cluster0-rqsae.mongodb.net/tallerninja?';

mongoose.connect(URI)
.then(db=>console.log('DB CONNECT'))
.catch(err=>console.log(err));

module.exports=mongoose;