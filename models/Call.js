const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CallSchema = new Schema({
  name: {
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

module.exports = Call = mongoose.model('call', CallSchema);
