// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  },
  password: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;