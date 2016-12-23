// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  location: {
      locationName: { 
          type: String,
          required: true
      },
      address: {
          type: String,
          required: true
      },
      city:{
        type: String,
        required: true
      },
      country: {
          type: String,
          required: true
      }
  },
  date: {
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      }
  },
  guests: {
    type: Array, 
    required:true
  },
  description: String,
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: Date
  
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;