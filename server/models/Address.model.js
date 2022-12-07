const { Schema, model } = require('mongoose');

const addressSchema = new Schema(
  {
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
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model('Address', addressSchema);
