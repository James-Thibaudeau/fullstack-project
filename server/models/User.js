// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create a schema
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },  
  password: {
    type: String
  },
  firstName: {
      type: String
  },
  lastName: {
      type: String
  },
  email: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }

});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;