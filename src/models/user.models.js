var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = Schema({
  nombre    : {type:String},
  apellidos : {type:String},
  edad      : {type:Number}
});

module.exports = mongoose.model("User", UserSchema);