const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
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
  model: {
      type: String,
      required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);
