const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: [true, 'Street name is required'],
  },
  houseNr: {
    type: String,
    required: [true, 'House Nr. is required'],
  },
  city: {
    type: String,
    required: [true, 'Location is required'],
  },
  zipCode: {
    type: String,
    required: [true, 'ZIP Code is required'],
  },
  country: {
    type: Sring,
    required: [true, 'Country is required'],
    enum: ['Deutschland', 'Österreich', 'Schweiz'],
  },
});

module.exports = mongoose.model('Address', addressSchema);
