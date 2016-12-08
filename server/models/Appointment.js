// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var AppointmentSchema = new Schema({
  name: String,
  creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  location: {
      locationName: { 
          type: String,
      },
      address: {
          type: String,
      },
      city:{
        type: String,
      },
      country: {
          type: String,
      }
  },
  date: {
    type: Date,
    required: true,
  },
  guests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: Date,
  
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;