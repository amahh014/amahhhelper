const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  address: {
      type: String,
      required: true
  },
  comment: {
      type: String,
      required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Place = mongoose.model('place', PlaceSchema);
